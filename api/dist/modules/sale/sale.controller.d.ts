import { SaleService } from './sale.service';
export declare class SaleController {
    private readonly service;
    constructor(service: SaleService);
    findAll(): import("@prisma/client").Prisma.PrismaPromise<({
        tavoli: {
            id: string;
            nome: string | null;
            attivo: boolean;
            salaId: string | null;
            numero: number;
            posti: number;
            stato: string;
            precontoRichiesto: boolean;
            precontoTotale: number | null;
        }[];
    } & {
        ordine: number;
        id: string;
        nome: string;
        attiva: boolean;
        pizzeriaId: string | null;
    })[]>;
    create(body: any): import("@prisma/client").Prisma.Prisma__SalaClient<{
        ordine: number;
        id: string;
        nome: string;
        attiva: boolean;
        pizzeriaId: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, body: any): import("@prisma/client").Prisma.Prisma__SalaClient<{
        ordine: number;
        id: string;
        nome: string;
        attiva: boolean;
        pizzeriaId: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__SalaClient<{
        ordine: number;
        id: string;
        nome: string;
        attiva: boolean;
        pizzeriaId: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findTavoli(): import("@prisma/client").Prisma.PrismaPromise<{
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
    createTavolo(body: any): import("@prisma/client").Prisma.Prisma__TavoloClient<{
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
    updateTavolo(id: string, body: any): import("@prisma/client").Prisma.Prisma__TavoloClient<{
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
    setStatoTavolo(id: string, body: {
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
    richiediPreconto(id: string, body: {
        totale?: number;
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
    removeTavolo(id: string): import("@prisma/client").Prisma.Prisma__TavoloClient<{
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
