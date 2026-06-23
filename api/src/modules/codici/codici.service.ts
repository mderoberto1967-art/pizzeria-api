import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';

function generaCodice(): string {
  const parts = [];
  for (let i = 0; i < 3; i++) {
    parts.push(Math.random().toString(36).substring(2, 6).toUpperCase());
  }
  return `PIZZA-${parts.join('-')}`;
}

@Injectable()
export class CodiciService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.codiceAttivazione.findMany({ orderBy: { creatoA: 'desc' } });
  }

  async create(data: { tipo?: string; giorniValidita?: number; codice?: string }) {
    const tipo = data.tipo || 'standard';
    const giorni = data.giorniValidita || (tipo === 'demo' ? 7 : 365);
    let codice = data.codice?.trim() || '';
    if (!codice) codice = generaCodice();
    try {
      return await this.prisma.codiceAttivazione.create({
        data: { codice, tipo, giorniValidita: giorni },
      });
    } catch {
      // se il codice esiste già (duplicato), generane uno nuovo
      return await this.prisma.codiceAttivazione.create({
        data: { codice: generaCodice(), tipo, giorniValidita: giorni },
      });
    }
  }

  async createMany(count: number, data: { tipo?: string; giorniValidita?: number }) {
    const tipo = data.tipo || 'standard';
    const giorni = data.giorniValidita || (tipo === 'demo' ? 7 : 365);
    const codici = Array.from({ length: count }, () => ({
      codice: generaCodice(),
      tipo,
      giorniValidita: giorni,
    }));
    return this.prisma.codiceAttivazione.createMany({ data: codici });
  }

  async validate(codice: string) {
    const record = await this.prisma.codiceAttivazione.findUnique({ where: { codice } });
    if (!record) return { valido: false, motivo: 'Codice inesistente' };
    if (record.usato) return { valido: false, motivo: 'Codice già utilizzato' };
    if (record.dataScadenza && new Date(record.dataScadenza) < new Date()) {
      return { valido: false, motivo: 'Codice scaduto' };
    }
    return { valido: true, tipo: record.tipo, giorniValidita: record.giorniValidita };
  }

  async attiva(codice: string, nomePizzeria?: string) {
    const record = await this.prisma.codiceAttivazione.findUnique({ where: { codice } });
    if (!record) throw new HttpException('Codice inesistente', HttpStatus.BAD_REQUEST);
    if (record.usato) throw new HttpException('Codice già utilizzato', HttpStatus.CONFLICT);
    if (record.dataScadenza && new Date(record.dataScadenza) < new Date()) {
      throw new HttpException('Codice scaduto', HttpStatus.BAD_REQUEST);
    }

    const pizzeria = await this.prisma.pizzeria.create({
      data: {
        nome: nomePizzeria || `Pizzeria ${codice}`,
        codice,
        attiva: true,
        bloccata: false,
      },
    });

    const dataScadenza = new Date();
    dataScadenza.setDate(dataScadenza.getDate() + record.giorniValidita);
    await this.prisma.codiceAttivazione.update({
      where: { id: record.id },
      data: { usato: true, dataScadenza, pizzeriaId: pizzeria.id },
    });

    return {
      pizzeriaId: pizzeria.id,
      nome: pizzeria.nome,
      codice: pizzeria.codice,
      scadenza: dataScadenza.toISOString(),
      tipo: record.tipo,
    };
  }

  async remove(id: string) {
    return this.prisma.codiceAttivazione.delete({ where: { id } });
  }
}
