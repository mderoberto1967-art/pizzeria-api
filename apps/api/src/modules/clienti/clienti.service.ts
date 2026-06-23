import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class ClientiService {
  constructor(private prisma: PrismaService) {}
  findAll(q?: string) {
    return this.prisma.cliente.findMany({
      where: q ? { OR: [{ nome: { contains: q } }, { cognome: { contains: q } }, { telefono: { contains: q } }] } : undefined,
      orderBy: { nome: 'asc' },
    });
  }
  create(data: any) { return this.prisma.cliente.create({ data }); }
  update(id: string, data: any) { return this.prisma.cliente.update({ where: { id }, data }); }
  remove(id: string) { return this.prisma.cliente.delete({ where: { id } }); }
}
