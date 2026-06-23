import { SaleService } from './sale.service';
export declare class TavoliController {
    private readonly service;
    constructor(service: SaleService);
    findAll(salaId?: string): import("@prisma/client").Prisma.PrismaPromise<{
        id: string;
        nome: string | null;
        attivo: boolean;
        salaId: string | null;
        numero: number;
        posti: number;
        stato: string;
        precontoRichiesto: boolean;
        precontoTotale: number | null;
    }[]>;
    create(body: any): import("@prisma/client").Prisma.Prisma__TavoloClient<{
        id: string;
        nome: string | null;
        attivo: boolean;
        salaId: string | null;
        numero: number;
        posti: number;
        stato: string;
        precontoRichiesto: boolean;
        precontoTotale: number | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, body: any): import("@prisma/client").Prisma.Prisma__TavoloClient<{
        id: string;
        nome: string | null;
        attivo: boolean;
        salaId: string | null;
        numero: number;
        posti: number;
        stato: string;
        precontoRichiesto: boolean;
        precontoTotale: number | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    setStato(id: string, body: {
        stato: string;
    }): import("@prisma/client").Prisma.Prisma__TavoloClient<{
        id: string;
        nome: string | null;
        attivo: boolean;
        salaId: string | null;
        numero: number;
        posti: number;
        stato: string;
        precontoRichiesto: boolean;
        precontoTotale: number | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__TavoloClient<{
        id: string;
        nome: string | null;
        attivo: boolean;
        salaId: string | null;
        numero: number;
        posti: number;
        stato: string;
        precontoRichiesto: boolean;
        precontoTotale: number | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
