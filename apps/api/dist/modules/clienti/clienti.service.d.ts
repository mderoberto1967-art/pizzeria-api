import { PrismaService } from '../../prisma.service';
export declare class ClientiService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(q?: string): import("@prisma/client").Prisma.PrismaPromise<{
        id: string;
        nome: string;
        indirizzo: string | null;
        telefono: string | null;
        email: string | null;
        creatoA: Date;
        pizzeriaId: string | null;
        cognome: string | null;
        note: string | null;
    }[]>;
    create(data: any): import("@prisma/client").Prisma.Prisma__ClienteClient<{
        id: string;
        nome: string;
        indirizzo: string | null;
        telefono: string | null;
        email: string | null;
        creatoA: Date;
        pizzeriaId: string | null;
        cognome: string | null;
        note: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, data: any): import("@prisma/client").Prisma.Prisma__ClienteClient<{
        id: string;
        nome: string;
        indirizzo: string | null;
        telefono: string | null;
        email: string | null;
        creatoA: Date;
        pizzeriaId: string | null;
        cognome: string | null;
        note: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__ClienteClient<{
        id: string;
        nome: string;
        indirizzo: string | null;
        telefono: string | null;
        email: string | null;
        creatoA: Date;
        pizzeriaId: string | null;
        cognome: string | null;
        note: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
