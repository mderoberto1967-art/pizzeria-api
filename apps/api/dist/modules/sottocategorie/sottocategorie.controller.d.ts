import { SottocategorieService } from './sottocategorie.service';
export declare class SottocategorieController {
    private readonly service;
    constructor(service: SottocategorieService);
    findAll(categoriaId?: string): import("@prisma/client").Prisma.PrismaPromise<{
        ordine: number;
        id: string;
        nome: string;
        attiva: boolean;
        categoriaId: string;
    }[]>;
    create(body: any): import("@prisma/client").Prisma.Prisma__SottoCategoriaClient<{
        ordine: number;
        id: string;
        nome: string;
        attiva: boolean;
        categoriaId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, body: any): import("@prisma/client").Prisma.Prisma__SottoCategoriaClient<{
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
