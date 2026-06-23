import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class RoyaltyService {
  constructor(private prisma: PrismaService) {}

  // Legge tutti i periodi royalty, opzionalmente filtrati per pizzeria
  findAll(periodo?: string, pizzeriaId?: string) {
    const where: any = {};
    if (periodo) where.periodo = periodo;
    if (pizzeriaId) where.pizzeriaId = pizzeriaId;
    return this.prisma.royaltyPeriodo.findMany({
      where,
      orderBy: { periodo: 'desc' },
      include: { pizzeria: true },
    });
  }

  // Calcola royalty per una pizzeria in un periodo
  async calcola(pizzeriaId: string, periodo: string, importoPerPizza: number) {
    // Conta le pizze vendute in quel periodo
    const inizio = new Date(`${periodo}-01`);
    const fine = new Date(inizio.getFullYear(), inizio.getMonth() + 1, 0);

    const vendite = await this.prisma.venditaStorico.aggregate({
      where: {
        pizzeriaId,
        tipo: 'pizza',
        data: { gte: inizio, lte: fine },
      },
      _sum: { quantita: true },
    });

    const pizzeVendute = vendite._sum.quantita ?? 0;
    const totale = pizzeVendute * importoPerPizza;

    // Upsert
    return this.prisma.royaltyPeriodo.upsert({
      where: { pizzeriaId_periodo: { pizzeriaId, periodo } },
      update: { pizzeVendute, importoPerPizza, totale },
      create: {
        pizzeriaId,
        periodo,
        pizzeVendute,
        importoPerPizza,
        totale,
      },
    });
  }

  create(data: any) {
    return this.prisma.royaltyPeriodo.create({ data });
  }

  update(id: string, data: any) {
    return this.prisma.royaltyPeriodo.update({ where: { id }, data });
  }

  remove(id: string) {
    return this.prisma.royaltyPeriodo.delete({ where: { id } });
  }
}
