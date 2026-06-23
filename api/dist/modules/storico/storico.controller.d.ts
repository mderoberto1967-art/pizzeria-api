import { StoricoService } from './storico.service';
export declare class StoricoController {
    private readonly service;
    constructor(service: StoricoService);
    findAll(da?: string, a?: string, articoloId?: string): import("@prisma/client").Prisma.PrismaPromise<{
        id: string;
        data: Date;
        pizzeriaId: string;
        tipo: string;
        totale: number;
        metodoPagamento: string;
        nomeSnapshot: string;
        quantita: number;
        articoloId: string | null;
        ordineId: string | null;
        royaltyCalcolata: boolean;
    }[]>;
    riepilogo(periodo?: string): Promise<{
        totaleOrdini: number;
        totaleImporto: number;
        pizzeVendute: number;
    }>;
    pizzerie(da?: string, a?: string): Promise<{
        pizzeriaId: string;
        nome: string;
        pizze: number;
        totale: number;
        royalty: number;
    }[]>;
    pagamenti(da?: string, a?: string): Promise<{
        metodoPagamento: string;
        pizze: number;
        importo: number;
    }[]>;
}
