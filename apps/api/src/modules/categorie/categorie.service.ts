import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class CategorieService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.categoria.findMany({ orderBy: { ordine: 'asc' } });
  }

  create(data: { nome: string; ordine?: number; pizzeriaId?: string }) {
    return this.prisma.categoria.create({
      data: {
        ...data,
        pizzeriaId: data.pizzeriaId ?? this.prisma.defaultPizzeria,
      },
    });
  }

  update(id: string, data: { nome?: string; ordine?: number; attiva?: boolean }) {
    return this.prisma.categoria.update({ where: { id }, data });
  }

  remove(id: string) {
    return this.prisma.categoria.delete({ where: { id } });
  }
}
