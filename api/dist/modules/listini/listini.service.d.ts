import { PrismaService } from '../../prisma.service';
export declare class ListiniService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        id: string;
        nome: string;
        creatoA: Date;
        pizzeriaId: string | null;
        attivo: boolean;
        regole: string;
    }[]>;
    create(data: any): import("@prisma/client").Prisma.Prisma__ListinoClient<{
        id: string;
        nome: string;
        creatoA: Date;
        pizzeriaId: string | null;
        attivo: boolean;
        regole: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, data: any): import("@prisma/client").Prisma.Prisma__ListinoClient<{
        id: string;
        nome: string;
        creatoA: Date;
        pizzeriaId: string | null;
        attivo: boolean;
        regole: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    attiva(id: string): Promise<{
        id: string;
        nome: string;
        creatoA: Date;
        pizzeriaId: string | null;
        attivo: boolean;
        regole: string;
    }>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__ListinoClient<{
        id: string;
        nome: string;
        creatoA: Date;
        pizzeriaId: string | null;
        attivo: boolean;
        regole: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
