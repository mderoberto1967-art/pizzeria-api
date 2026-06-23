import { OperatoriService } from './operatori.service';
export declare class OperatoriController {
    private readonly service;
    constructor(service: OperatoriService);
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        id: string;
        nome: string;
        creatoA: Date;
        pizzeriaId: string | null;
        ruolo: string;
        pinHash: string | null;
        attivo: boolean;
    }[]>;
    create(body: any): import("@prisma/client").Prisma.Prisma__OperatoreClient<{
        id: string;
        nome: string;
        creatoA: Date;
        pizzeriaId: string | null;
        ruolo: string;
        pinHash: string | null;
        attivo: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, body: any): import("@prisma/client").Prisma.Prisma__OperatoreClient<{
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
