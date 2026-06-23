import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';

function genCodice(): string {
  const parts = [];
  for (let i = 0; i < 3; i++) {
    parts.push(Math.random().toString(36).substring(2, 6).toUpperCase());
  }
  return `PIZZA-${parts.join('-')}`;
}

@Injectable()
export class PizzerieService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.pizzeria.findMany({
      orderBy: { creatoA: 'desc' },
      include: {
        _count: { select: { ordini: true, venditeStorico: true } },
      },
    });
  }

  async findById(id: string) {
    return this.prisma.pizzeria.findUnique({
      where: { id },
      include: {
        ordini: { orderBy: { creatoA: 'desc' }, take: 50 },
        venditeStorico: { orderBy: { data: 'desc' }, take: 100 },
        royaltyPeriodi: { orderBy: { periodo: 'desc' } },
      },
    });
  }

  async findByCodice(codice: string) {
    return this.prisma.pizzeria.findUnique({ where: { codice } });
  }

  async create(data: any) {
    const codice = genCodice();
    return this.prisma.pizzeria.create({
      data: { ...data, codice, attiva: true, bloccata: false },
    });
  }

  async update(id: string, data: any) {
    return this.prisma.pizzeria.update({
      where: { id },
      data,
    });
  }

  async toggleBlocco(id: string) {
    const p = await this.prisma.pizzeria.findUnique({ where: { id } });
    if (!p) throw new Error('Pizzeria non trovata');
    return this.prisma.pizzeria.update({
      where: { id },
      data: { bloccata: !p.bloccata },
    });
  }

  async toggleAttiva(id: string) {
    const p = await this.prisma.pizzeria.findUnique({ where: { id } });
    if (!p) throw new Error('Pizzeria non trovata');
    return this.prisma.pizzeria.update({
      where: { id },
      data: { attiva: !p.attiva },
    });
  }

  async remove(id: string) {
    return this.prisma.pizzeria.delete({ where: { id } });
  }

  async syncConfig(id: string) {
    const pizzeria = await this.prisma.pizzeria.findUnique({ where: { id } });
    if (!pizzeria) throw new Error('Pizzeria non trovata');

    const [categorie, sottoCategorie, ingredienti, articoli, listini, sale, clienti] = await Promise.all([
      this.prisma.categoria.findMany({ where: { pizzeriaId: id } }),
      this.prisma.sottoCategoria.findMany({ where: { categoria: { pizzeriaId: id } } }),
      this.prisma.ingrediente.findMany(),
      this.prisma.articolo.findMany({ where: { pizzeriaId: id } }),
      this.prisma.listino.findMany({ where: { pizzeriaId: id } }),
      this.prisma.sala.findMany({ where: { pizzeriaId: id }, include: { tavoli: true } }),
      this.prisma.cliente.findMany({ where: { pizzeriaId: id } }),
    ]);

    return {
      pizzeriaId: id,
      nome: pizzeria.nome,
      categorie,
      sottoCategorie,
      ingredienti,
      articoli,
      listini,
      sale,
      clienti,
    };
  }
}
