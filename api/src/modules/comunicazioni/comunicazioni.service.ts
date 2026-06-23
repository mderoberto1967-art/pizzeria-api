import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class ComunicazioniService {
  constructor(private prisma: PrismaService) {}

  findAll(letta?: string) {
    return this.prisma.comunicazione.findMany({
      where: letta !== undefined ? { letta: letta === 'true' } : undefined,
      orderBy: { timestamp: 'desc' },
    });
  }

  create(data: { mittente: string; testo: string }) {
    return this.prisma.comunicazione.create({ data });
  }

  marcaLetta(id: string) {
    return this.prisma.comunicazione.update({ where: { id }, data: { letta: true } });
  }

  remove(id: string) {
    return this.prisma.comunicazione.delete({ where: { id } });
  }
}
