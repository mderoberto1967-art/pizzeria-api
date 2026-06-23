import { RoyaltyService } from './royalty.service';
export declare class RoyaltyController {
    private readonly service;
    constructor(service: RoyaltyService);
    findAll(periodo?: string): import("@prisma/client").Prisma.PrismaPromise<({
        pizzeria: {
            id: string;
            codice: string;
            nome: string;
            indirizzo: string | null;
            telefono: string | null;
            email: string | null;
            attiva: boolean;
            bloccata: boolean;
            ipPubblico: string | null;
            ultimoAccesso: Date | null;
            creatoA: Date;
        };
    } & {
        id: string;
        creatoA: Date;
        pizzeriaId: string;
        note: string | null;
        totale: number;
        periodo: string;
        pizzeVendute: number;
        importoPerPizza: number;
        pagato: boolean;
    })[]>;
    create(body: any): import("@prisma/client").Prisma.Prisma__RoyaltyPeriodoClient<{
        id: string;
        creatoA: Date;
        pizzeriaId: string;
        note: string | null;
        totale: number;
        periodo: string;
        pizzeVendute: number;
        importoPerPizza: number;
        pagato: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, body: any): import("@prisma/client").Prisma.Prisma__RoyaltyPeriodoClient<{
        id: string;
        creatoA: Date;
        pizzeriaId: string;
        note: string | null;
        totale: number;
        periodo: string;
        pizzeVendute: number;
        importoPerPizza: number;
        pagato: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
