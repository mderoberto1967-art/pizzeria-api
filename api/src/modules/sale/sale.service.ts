import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class SaleService {
  constructor(private prisma: PrismaService) {}

  findAllSale() { return this.prisma.sala.findMany({ orderBy: { ordine: 'asc' }, include: { tavoli: true } }); }
  createSala(data: any) { return this.prisma.sala.create({ data }); }
  updateSala(id: string, data: any) { return this.prisma.sala.update({ where: { id }, data }); }
  removeSala(id: string) { return this.prisma.sala.delete({ where: { id } }); }

  findAllTavoli(salaId?: string) { return this.prisma.tavolo.findMany({ where: salaId ? { salaId } : undefined }); }
  createTavolo(data: any) { return this.prisma.tavolo.create({ data }); }
  updateTavolo(id: string, data: any) { return this.prisma.tavolo.update({ where: { id }, data }); }
  setStatoTavolo(id: string, stato: string) { return this.prisma.tavolo.update({ where: { id }, data: { stato } }); }
  removeTavolo(id: string) { return this.prisma.tavolo.delete({ where: { id } }); }

  richiediPreconto(id: string, body: { totale?: number }) {
    return this.prisma.tavolo.update({
      where: { id },
      data: { precontoRichiesto: true, precontoTotale: body?.totale ?? null },
    });
  }
}
