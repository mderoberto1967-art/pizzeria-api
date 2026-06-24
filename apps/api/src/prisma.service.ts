import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const DEFAULT_PIZZERIA_ID = 'pizzeria-default';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  async onModuleInit() {
    await this.$connect();
    // La pizzeria di default viene creata/verificata all'avvio in modo sicuro.
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
      // Non bloccare l'avvio se il record esiste già o il DB non è ancora pronto.
      console.warn('PrismaService: unable to seed default pizzeria:', err.message);
    }
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

  get defaultPizzeria() {
    return DEFAULT_PIZZERIA_ID;
  }
}
