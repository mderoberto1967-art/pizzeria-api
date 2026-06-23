import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { RealtimeGateway } from '../realtime/realtime.gateway';

@Injectable()
export class OrdiniService {
  constructor(private prisma: PrismaService, private realtime: RealtimeGateway) {}

  async findAll(stato?: string, data?: string) {
    const where: any = {};
    if (stato) where.stato = stato;
    if (data) {
      const d = new Date(data);
      const domani = new Date(d);
      domani.setDate(domani.getDate() + 1);
      where.creatoA = { gte: d, lt: domani };
    }
    return this.prisma.ordine.findMany({
      where,
      include: { righe: true, tavolo: true, cliente: true },
      orderBy: { creatoA: 'desc' },
    });
  }

  findOne(id: string) {
    return this.prisma.ordine.findUnique({ where: { id }, include: { righe: true, tavolo: true, cliente: true } });
  }

  async create(data: any) {
    const { righe, tavoloId, clienteId, ...ordineData } = data;
    const count = await this.prisma.ordine.count();

    const [tavoloEsiste, clienteEsiste] = await Promise.all([
      tavoloId ? !!(await this.prisma.tavolo.findUnique({ where: { id: tavoloId } })) : false,
      clienteId ? !!(await this.prisma.cliente.findUnique({ where: { id: clienteId } })) : false,
    ]);

    const righeSafe = righe
      ? await Promise.all(
          righe.map(async (r: any) => {
            const hasArt = r.articoloId
              ? !!(await this.prisma.articolo.findUnique({ where: { id: r.articoloId } }))
              : false;
            return {
              ...r,
              articoloId: hasArt ? r.articoloId : null,
              ingredientiAggiunti: JSON.stringify(r.ingredientiAggiunti ?? []),
              ingredientiRimossi: JSON.stringify(r.ingredientiRimossi ?? []),
            };
          })
        )
      : [];

    const ordine = await this.prisma.ordine.create({
      data: {
        ...ordineData,
        numero: count + 1,
        tavoloId: tavoloEsiste ? tavoloId : null,
        clienteId: clienteEsiste ? clienteId : null,
        pizzeriaId: data.pizzeriaId ?? 'pizzeria-default',
        righe: righeSafe.length ? { create: righeSafe } : undefined,
      },
      include: { righe: true },
    });
    this.realtime.emitOrdineCreato(ordine as any);
    return ordine;
  }

  updateStato(id: string, stato: string) {
    return this.prisma.ordine.update({ where: { id }, data: { stato } });
  }

  remove(id: string) {
    return this.prisma.ordine.delete({ where: { id } });
  }
}
