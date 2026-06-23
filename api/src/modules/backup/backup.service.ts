import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class BackupService {
  constructor(private prisma: PrismaService) {}

  async export() {
    const pizzerie = await this.prisma.pizzeria.findMany();
    const codici = await this.prisma.codiceAttivazione.findMany();
    const royalty = await this.prisma.royaltyPeriodo.findMany();
    const [categorie, sottoCategorie, ingredienti, articoli, listini, categorieStampanti, stampanti,
      sale, tavoli, clienti, ordini, storico, comunicazioni, impostazioni, operatori] = await Promise.all([
      this.prisma.categoria.findMany(),
      this.prisma.sottoCategoria.findMany(),
      this.prisma.ingrediente.findMany(),
      this.prisma.articolo.findMany(),
      this.prisma.listino.findMany(),
      this.prisma.categoriaStampante.findMany(),
      this.prisma.stampante.findMany(),
      this.prisma.sala.findMany(),
      this.prisma.tavolo.findMany(),
      this.prisma.cliente.findMany(),
      this.prisma.ordine.findMany({ include: { righe: true } }),
      this.prisma.venditaStorico.findMany(),
      this.prisma.comunicazione.findMany(),
      this.prisma.impostazione.findMany(),
      this.prisma.operatore.findMany(),
    ]);
    return { pizzerie, codici, royalty, categorie, sottoCategorie, ingredienti, articoli, listini, categorieStampanti, stampanti,
      sale, tavoli, clienti, operatori, ordini, storico, comunicazioni, impostazioni, exportedAt: new Date().toISOString() };
  }

  async import(data: any) {
    // Verifica se il database è vuoto prima dell'import
    const count = await this.prisma.pizzeria.count();
    if (count > 0 && data.pizzerie) {
      throw new InternalServerErrorException('Database già popolato. Reset prima dell\'import.');
    }
    
    // Importa pizzerie e codici se esistono
    if (data.pizzerie) {
      const pizzerie = data.pizzerie.map((p: any) => ({ ...p, id: undefined }));
      for (const p of pizzerie) {
        await this.prisma.pizzeria.upsert({ where: { codice: p.codice }, update: {}, create: p });
      }
    }
    if (data.codici) {
      const codici = data.codici.map((c: any) => ({ ...c, id: undefined }));
      for (const c of codici) {
        await this.prisma.codiceAttivazione.upsert({ where: { codice: c.codice }, update: {}, create: c });
      }
    }
    
    return { ok: true, message: 'Backup importato con successo' };
  }
}
