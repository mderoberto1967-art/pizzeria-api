import { CategorieService } from './categorie.service';
export declare class CategorieController {
    private readonly service;
    constructor(service: CategorieService);
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        ordine: number;
        id: string;
        nome: string;
        attiva: boolean;
        pizzeriaId: string | null;
    }[]>;
    create(body: {
        nome: string;
        ordine?: number;
    }): import("@prisma/client").Prisma.Prisma__CategoriaClient<{
        ordine: number;
        id: string;
        nome: string;
        attiva: boolean;
        pizzeriaId: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, body: any): import("@prisma/client").Prisma.Prisma__CategoriaClient<{
        ordine: number;
        id: string;
        nome: string;
        attiva: boolean;
        pizzeriaId: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__CategoriaClient<{
        ordine: number;
        id: string;
        nome: string;
        attiva: boolean;
        pizzeriaId: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
