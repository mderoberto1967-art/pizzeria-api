import { IngredientiService } from './ingredienti.service';
export declare class IngredientiController {
    private readonly service;
    constructor(service: IngredientiService);
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        id: string;
        nome: string;
        creatoA: Date;
        disponibile: boolean;
        costoUnitario: number | null;
        allergeni: string | null;
    }[]>;
    create(body: any): import("@prisma/client").Prisma.Prisma__IngredienteClient<{
        id: string;
        nome: string;
        creatoA: Date;
        disponibile: boolean;
        costoUnitario: number | null;
        allergeni: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, body: any): import("@prisma/client").Prisma.Prisma__IngredienteClient<{
        id: string;
        nome: string;
        creatoA: Date;
        disponibile: boolean;
        costoUnitario: number | null;
        allergeni: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__IngredienteClient<{
        id: string;
        nome: string;
        creatoA: Date;
        disponibile: boolean;
        costoUnitario: number | null;
        allergeni: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
