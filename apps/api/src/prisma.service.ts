import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const DEFAULT_PIZZERIA_ID = 'pizzeria-default';

@Injectable()
export class PrismaService implements OnModuleInit, OnModuleDestroy {
  private client: PrismaClient;

  constructor() {
    this.client = new PrismaClient();
  }

  get pizzeria() {
    return this.client.pizzeria;
  }
  get categoria() {
    return this.client.categoria;
  }
  get sottoCategoria() {
    return this.client.sottoCategoria;
  }
  get articolo() {
    return this.client.articolo;
  }
  get ingrediente() {
    return this.client.ingrediente;
  }
  get listino() {
    return this.client.listino;
  }
  get categoriaStampante() {
    return this.client.categoriaStampante;
  }
  get stampante() {
    return this.client.stampante;
  }
  get sala() {
    return this.client.sala;
  }
  get tavolo() {
    return this.client.tavolo;
  }
  get cliente() {
    return this.client.cliente;
  }
  get ordine() {
    return this.client.ordine;
  }
  get rigaOrdine() {
    return this.client.rigaOrdine;
  }
  get venditaStorico() {
    return this.client.venditaStorico;
  }
  get comunicazione() {
    return this.client.comunicazione;
  }
  get backup() {
    return this.client.backup;
  }
  get royaltyPeriodo() {
    return this.client.royaltyPeriodo;
  }
  get impostazione() {
    return this.client.impostazione;
  }
  get configurazionePagamenti() {
    return this.client.configurazionePagamenti;
  }
  get codiceAttivazione() {
    return this.client.codiceAttivazione;
  }
  get operatore() {
    return this.client.operatore;
  }

  async onModuleInit() {
    await this.client.$connect();
    try {
      const exists = await this.pizzeria.findUnique({ where: { id: DEFAULT_PIZZERIA_ID } });
      if (!exists) {
        await this.pizzeria.create({
          data: {
            id: DEFAULT_PIZZERIA_ID,
            codice: 'DEFAULT-PIZZERIA',
            nome: 'Pizzeria Default',
            attiva: true,
            bloccata: false,
          },
        });
      }
    } catch (err) {
      console.warn('PrismaService: unable to seed default pizzeria:', err.message);
    }
  }

  async onModuleDestroy() {
    await this.client.$disconnect();
  }

  get defaultPizzeria() {
    return DEFAULT_PIZZERIA_ID;
  }

  // helper pass-through per eventuali usi diretti
  $transaction(...args: unknown[]) {
    return (this.client.$transaction as (...args: unknown[]) => unknown)(...args);
  }

  $queryRaw(...args: unknown[]) {
    return (this.client.$queryRaw as (...args: unknown[]) => unknown)(...args);
  }

  $executeRaw(...args: unknown[]) {
    return (this.client.$executeRaw as (...args: unknown[]) => unknown)(...args);
  }
}
