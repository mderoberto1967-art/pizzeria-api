import { PrismaService } from '../../prisma.service';
export declare class SottocategorieService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(categoriaId?: string): import("@prisma/client").Prisma.PrismaPromise<{
        ordine: number;
        id: string;
        nome: string;
        attiva: boolean;
        categoriaId: string;
    }[]>;
    create(data: {
        categoriaId: string;
        nome: string;
        ordine?: number;
    }): import("@prisma/client").Prisma.Prisma__SottoCategoriaClient<{
        ordine: number;
        id: string;
        nome: string;
        attiva: boolean;
        categoriaId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, data: any): import("@prisma/client").Prisma.Prisma__SottoCategoriaClient<{
        ordine: number;
        id: string;
        nome: string;
        attiva: boolean;
        categoriaId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__SottoCategoriaClient<{
        ordine: number;
        id: string;
        nome: string;
        attiva: boolean;
        categoriaId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
