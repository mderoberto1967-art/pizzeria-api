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
    const { righe, ...ordineData } = data;
    const count = await this.prisma.ordine.count();

    // Rimuovi eventuali campi non previsti da Prisma
    delete ordineData.operatoreId;

    const [tavoloEsiste, clienteEsiste] = await Promise.all([
      ordineData.tavoloId ? !!(await this.prisma.tavolo.findUnique({ where: { id: ordineData.tavoloId } })) : false,
      ordineData.clienteId ? !!(await this.prisma.cliente.findUnique({ where: { id: ordineData.clienteId } })) : false,
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
              nomeSnapshot: r.nomeSnapshot || '',
              totaleRiga: (r.prezzoUnitario ?? 0) * (r.quantita ?? 1),
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
        tavoloId: tavoloEsiste ? ordineData.tavoloId : null,
        clienteId: clienteEsiste ? ordineData.clienteId : null,
        pizzeriaId: ordineData.pizzeriaId ?? 'pizzeria-default',
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
