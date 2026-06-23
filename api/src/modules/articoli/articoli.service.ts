import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class ArticoliService {
  constructor(private prisma: PrismaService) {}

  findAll(categoriaId?: string, disponibile?: string) {
    return this.prisma.articolo.findMany({
      where: {
        ...(categoriaId ? { categoriaId } : {}),
        ...(disponibile !== undefined ? { disponibile: disponibile === 'true' } : {}),
      },
      orderBy: { ordine: 'asc' },
    });
  }

  findOne(id: string) {
    return this.prisma.articolo.findUnique({ where: { id } });
  }

  create(data: any) {
    const { prezzi, prezziMaxy, ingredientiBaseIds, categorieStampantiIds, ...rest } = data;
    return this.prisma.articolo.create({
      data: {
        ...rest,
        prezzi: prezzi ? JSON.stringify(prezzi) : '{}',
        prezziMaxy: prezziMaxy ? JSON.stringify(prezziMaxy) : '{}',
        ingredientiBaseIds: ingredientiBaseIds ? JSON.stringify(ingredientiBaseIds) : '[]',
        categorieStampantiIds: categorieStampantiIds ? JSON.stringify(categorieStampantiIds) : '[]',
      },
    });
  }

  update(id: string, data: any) {
    const { prezzi, prezziMaxy, ingredientiBaseIds, categorieStampantiIds, ...rest } = data;
    return this.prisma.articolo.update({
      where: { id },
      data: {
        ...rest,
        ...(prezzi !== undefined ? { prezzi: JSON.stringify(prezzi) } : {}),
        ...(prezziMaxy !== undefined ? { prezziMaxy: JSON.stringify(prezziMaxy) } : {}),
        ...(ingredientiBaseIds !== undefined ? { ingredientiBaseIds: JSON.stringify(ingredientiBaseIds) } : {}),
        ...(categorieStampantiIds !== undefined ? { categorieStampantiIds: JSON.stringify(categorieStampantiIds) } : {}),
      },
    });
  }

  setDisponibilita(id: string, disponibile: boolean) {
    return this.prisma.articolo.update({ where: { id }, data: { disponibile } });
  }

  remove(id: string) {
    return this.prisma.articolo.delete({ where: { id } });
  }
}
