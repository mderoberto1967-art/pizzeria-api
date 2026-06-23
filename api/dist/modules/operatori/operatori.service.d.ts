import { PrismaService } from '../../prisma.service';
export declare class OperatoriService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        id: string;
        nome: string;
        creatoA: Date;
        pizzeriaId: string | null;
        ruolo: string;
        pinHash: string | null;
        attivo: boolean;
    }[]>;
    create(data: any): import("@prisma/client").Prisma.Prisma__OperatoreClient<{
        id: string;
        nome: string;
        creatoA: Date;
        pizzeriaId: string | null;
        ruolo: string;
        pinHash: string | null;
        attivo: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, data: any): import("@prisma/client").Prisma.Prisma__OperatoreClient<{
        id: string;
        nome: string;
        creatoA: Date;
        pizzeriaId: string | null;
        ruolo: string;
        pinHash: string | null;
        attivo: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__OperatoreClient<{
        id: string;
        nome: string;
        creatoA: Date;
        pizzeriaId: string | null;
        ruolo: string;
        pinHash: string | null;
        attivo: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
