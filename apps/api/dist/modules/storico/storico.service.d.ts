import { PrismaService } from '../../prisma.service';
export declare class StoricoService {
    private prisma;
    constructor(prisma: PrismaService);
    private rangeFilter;
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
    perPizzeria(da?: string, a?: string): Promise<{
        pizzeriaId: string;
        nome: string;
        pizze: number;
        totale: number;
        royalty: number;
    }[]>;
    perMetodoPagamento(da?: string, a?: string): Promise<{
        metodoPagamento: string;
        pizze: number;
        importo: number;
    }[]>;
}
