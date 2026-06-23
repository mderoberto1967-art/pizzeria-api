import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class OperatoriService {
  constructor(private prisma: PrismaService) {}
  findAll() { return this.prisma.operatore.findMany({ orderBy: { nome: 'asc' } }); }
  create(data: any) { return this.prisma.operatore.create({ data }); }
  update(id: string, data: any) { return this.prisma.operatore.update({ where: { id }, data }); }
  remove(id: string) { return this.prisma.operatore.delete({ where: { id } }); }
}
