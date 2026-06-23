import { ArticoliService } from './articoli.service';
export declare class ArticoliController {
    private readonly service;
    constructor(service: ArticoliService);
    findAll(cat?: string, disp?: string): import("@prisma/client").Prisma.PrismaPromise<{
        ordine: number;
        id: string;
        nome: string;
        creatoA: Date;
        aggiornatoA: Date;
        pizzeriaId: string | null;
        categoriaId: string;
        disponibile: boolean;
        sottoCategoriaId: string | null;
        tipo: string;
        prezzi: string;
        prezziMaxy: string;
        ingredientiBaseIds: string;
        categorieStampantiIds: string;
    }[]>;
    create(body: any): import("@prisma/client").Prisma.Prisma__ArticoloClient<{
        ordine: number;
        id: string;
        nome: string;
        creatoA: Date;
        aggiornatoA: Date;
        pizzeriaId: string | null;
        categoriaId: string;
        disponibile: boolean;
        sottoCategoriaId: string | null;
        tipo: string;
        prezzi: string;
        prezziMaxy: string;
        ingredientiBaseIds: string;
        categorieStampantiIds: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, body: any): import("@prisma/client").Prisma.Prisma__ArticoloClient<{
        ordine: number;
        id: string;
        nome: string;
        creatoA: Date;
        aggiornatoA: Date;
        pizzeriaId: string | null;
        categoriaId: string;
        disponibile: boolean;
        sottoCategoriaId: string | null;
        tipo: string;
        prezzi: string;
        prezziMaxy: string;
        ingredientiBaseIds: string;
        categorieStampantiIds: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    setDisp(id: string, body: {
        disponibile: boolean;
    }): import("@prisma/client").Prisma.Prisma__ArticoloClient<{
        ordine: number;
        id: string;
        nome: string;
        creatoA: Date;
        aggiornatoA: Date;
        pizzeriaId: string | null;
        categoriaId: string;
        disponibile: boolean;
        sottoCategoriaId: string | null;
        tipo: string;
        prezzi: string;
        prezziMaxy: string;
        ingredientiBaseIds: string;
        categorieStampantiIds: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__ArticoloClient<{
        ordine: number;
        id: string;
        nome: string;
        creatoA: Date;
        aggiornatoA: Date;
        pizzeriaId: string | null;
        categoriaId: string;
        disponibile: boolean;
        sottoCategoriaId: string | null;
        tipo: string;
        prezzi: string;
        prezziMaxy: string;
        ingredientiBaseIds: string;
        categorieStampantiIds: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
