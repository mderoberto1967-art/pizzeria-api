import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class ListiniService {
  constructor(private prisma: PrismaService) {}
  findAll() { return this.prisma.listino.findMany(); }
  create(data: any) {
    const { regole, ...rest } = data;
    return this.prisma.listino.create({ data: { ...rest, regole: regole ? JSON.stringify(regole) : '[]' } });
  }
  update(id: string, data: any) {
    const { regole, ...rest } = data;
    return this.prisma.listino.update({ where: { id }, data: { ...rest, ...(regole !== undefined ? { regole: JSON.stringify(regole) } : {}) } });
  }
  async attiva(id: string) {
    await this.prisma.listino.updateMany({ data: { attivo: false } });
    return this.prisma.listino.update({ where: { id }, data: { attivo: true } });
  }
  remove(id: string) { return this.prisma.listino.delete({ where: { id } }); }
}
