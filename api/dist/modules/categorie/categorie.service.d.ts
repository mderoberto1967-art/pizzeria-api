import { PrismaService } from '../../prisma.service';
export declare class CategorieService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        ordine: number;
        id: string;
        nome: string;
        attiva: boolean;
        pizzeriaId: string | null;
    }[]>;
    create(data: {
        nome: string;
        ordine?: number;
        pizzeriaId?: string;
    }): import("@prisma/client").Prisma.Prisma__CategoriaClient<{
        ordine: number;
        id: string;
        nome: string;
        attiva: boolean;
        pizzeriaId: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, data: {
        nome?: string;
        ordine?: number;
        attiva?: boolean;
    }): import("@prisma/client").Prisma.Prisma__CategoriaClient<{
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
