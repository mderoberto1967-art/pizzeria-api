import { PrismaService } from '../../prisma.service';
export declare class RoyaltyService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(periodo?: string, pizzeriaId?: string): import("@prisma/client").Prisma.PrismaPromise<({
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
    calcola(pizzeriaId: string, periodo: string, importoPerPizza: number): Promise<{
        id: string;
        creatoA: Date;
        pizzeriaId: string;
        note: string | null;
        totale: number;
        periodo: string;
        pizzeVendute: number;
        importoPerPizza: number;
        pagato: boolean;
    }>;
    create(data: any): import("@prisma/client").Prisma.Prisma__RoyaltyPeriodoClient<{
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
    update(id: string, data: any): import("@prisma/client").Prisma.Prisma__RoyaltyPeriodoClient<{
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
    remove(id: string): import("@prisma/client").Prisma.Prisma__RoyaltyPeriodoClient<{
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
