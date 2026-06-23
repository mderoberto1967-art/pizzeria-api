import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const DEFAULT_PIZZERIA_ID = 'pizzeria-default';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  async onModuleInit() {
    await this.$connect();
    // Assicura pizzeria di default per retrocompatibilità
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
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

  get defaultPizzeria() {
    return DEFAULT_PIZZERIA_ID;
  }
}
