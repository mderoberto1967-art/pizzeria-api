import { ClientiService } from './clienti.service';
export declare class ClientiController {
    private readonly service;
    constructor(service: ClientiService);
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
    create(body: any): import("@prisma/client").Prisma.Prisma__ClienteClient<{
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
    update(id: string, body: any): import("@prisma/client").Prisma.Prisma__ClienteClient<{
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
