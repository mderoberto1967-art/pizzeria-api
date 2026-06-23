import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class SottocategorieService {
  constructor(private prisma: PrismaService) {}

  findAll(categoriaId?: string) {
    return this.prisma.sottoCategoria.findMany({
      where: categoriaId ? { categoriaId } : undefined,
      orderBy: { ordine: 'asc' },
    });
  }

  create(data: { categoriaId: string; nome: string; ordine?: number }) {
    return this.prisma.sottoCategoria.create({ data });
  }

  update(id: string, data: any) {
    return this.prisma.sottoCategoria.update({ where: { id }, data });
  }

  remove(id: string) {
    return this.prisma.sottoCategoria.delete({ where: { id } });
  }
}
