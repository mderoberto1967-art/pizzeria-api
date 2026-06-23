import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class StoricoService {
  constructor(private prisma: PrismaService) {}

  private rangeFilter(da?: string, a?: string) {
    const where: any = {};
    if (da || a) {
      where.data = {};
      if (da) where.data.gte = new Date(da);
      if (a) where.data.lte = new Date(a);
    }
    return where;
  }

  findAll(da?: string, a?: string, articoloId?: string) {
    const where = this.rangeFilter(da, a);
    if (articoloId) where.articoloId = articoloId;
    return this.prisma.venditaStorico.findMany({ where, orderBy: { data: 'desc' } });
  }

  async riepilogo(periodo?: string) {
    const rows = await this.prisma.venditaStorico.findMany({
      where: periodo ? { data: { gte: new Date(periodo + '-01') } } : undefined,
    });
    const totaleOrdini = rows.length;
    const totaleImporto = rows.reduce((s: number, r: any) => s + r.totale, 0);
    const pizzeVendute = rows.filter((r: any) => r.nomeSnapshot.toLowerCase().includes('pizza')).reduce((s: number, r: any) => s + r.quantita, 0);
    return { totaleOrdini, totaleImporto, pizzeVendute };
  }

  async perPizzeria(da?: string, a?: string) {
    const where = this.rangeFilter(da, a);
    const rows = await this.prisma.venditaStorico.findMany({ where, include: { pizzeria: true } });
    const map: Record<string, { pizzeriaId: string; nome: string; pizze: number; totale: number; royalty: number }> = {};
    for (const r of rows) {
      if (!r.nomeSnapshot.toLowerCase().includes('pizza')) continue;
      const pid = r.pizzeriaId;
      if (!map[pid]) map[pid] = { pizzeriaId: pid, nome: r.pizzeria?.nome ?? pid, pizze: 0, totale: 0, royalty: 0 };
      map[pid].pizze += r.quantita ?? 0;
      map[pid].totale += r.totale ?? 0;
    }
    // Carica importo per pizza dalle pizzerie per royalty
    const pizzerie = await this.prisma.pizzeria.findMany({ select: { id: true, importoPerPizza: true } as any });
    const importiMap = Object.fromEntries(pizzerie.map((p: any) => [p.id, p.importoPerPizza ?? 0]));
    for (const k of Object.keys(map)) {
      map[k].royalty = map[k].pizze * (importiMap[k] ?? 0);
    }
    return Object.values(map);
  }

  async perMetodoPagamento(da?: string, a?: string) {
    const where = this.rangeFilter(da, a);
    const rows = await this.prisma.venditaStorico.findMany({ where });
    const map: Record<string, { metodoPagamento: string; pizze: number; importo: number }> = {};
    for (const r of rows) {
      if (!r.nomeSnapshot.toLowerCase().includes('pizza')) continue;
      const method = r.metodoPagamento || 'contanti';
      if (!map[method]) map[method] = { metodoPagamento: method, pizze: 0, importo: 0 };
      map[method].pizze += r.quantita ?? 0;
      map[method].importo += r.totale ?? 0;
    }
    return Object.values(map);
  }
}
