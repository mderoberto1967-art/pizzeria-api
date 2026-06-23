import { PrismaService } from '../../prisma.service';
export declare class IngredientiService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        id: string;
        nome: string;
        creatoA: Date;
        disponibile: boolean;
        costoUnitario: number | null;
        allergeni: string | null;
    }[]>;
    create(data: any): import("@prisma/client").Prisma.Prisma__IngredienteClient<{
        id: string;
        nome: string;
        creatoA: Date;
        disponibile: boolean;
        costoUnitario: number | null;
        allergeni: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, data: any): import("@prisma/client").Prisma.Prisma__IngredienteClient<{
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
