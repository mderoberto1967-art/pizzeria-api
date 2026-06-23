import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class IngredientiService {
  constructor(private prisma: PrismaService) {}
  findAll() { return this.prisma.ingrediente.findMany({ orderBy: { nome: 'asc' } }); }
  create(data: any) { return this.prisma.ingrediente.create({ data }); }
  update(id: string, data: any) { return this.prisma.ingrediente.update({ where: { id }, data }); }
  remove(id: string) { return this.prisma.ingrediente.delete({ where: { id } }); }
}
