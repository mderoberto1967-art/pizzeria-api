import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class StampantiService {
  constructor(private prisma: PrismaService) {}

  findAllCategorie() { return this.prisma.categoriaStampante.findMany({ include: { stampanti: true } }); }
  createCategoria(data: any) { return this.prisma.categoriaStampante.create({ data }); }
  updateCategoria(id: string, data: any) { return this.prisma.categoriaStampante.update({ where: { id }, data }); }
  removeCategoria(id: string) { return this.prisma.categoriaStampante.delete({ where: { id } }); }

  findAll() { return this.prisma.stampante.findMany(); }
  create(data: any) { return this.prisma.stampante.create({ data }); }
  update(id: string, data: any) { return this.prisma.stampante.update({ where: { id }, data }); }
  remove(id: string) { return this.prisma.stampante.delete({ where: { id } }); }
}
