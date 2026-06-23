import { PrismaService } from '../../prisma.service';
export declare class SaleService {
    private prisma;
    constructor(prisma: PrismaService);
    findAllSale(): import("@prisma/client").Prisma.PrismaPromise<({
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
    createSala(data: any): import("@prisma/client").Prisma.Prisma__SalaClient<{
        ordine: number;
        id: string;
        nome: string;
        attiva: boolean;
        pizzeriaId: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    updateSala(id: string, data: any): import("@prisma/client").Prisma.Prisma__SalaClient<{
        ordine: number;
        id: string;
        nome: string;
        attiva: boolean;
        pizzeriaId: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    removeSala(id: string): import("@prisma/client").Prisma.Prisma__SalaClient<{
        ordine: number;
        id: string;
        nome: string;
        attiva: boolean;
        pizzeriaId: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAllTavoli(salaId?: string): import("@prisma/client").Prisma.PrismaPromise<{
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
    createTavolo(data: any): import("@prisma/client").Prisma.Prisma__TavoloClient<{
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
    updateTavolo(id: string, data: any): import("@prisma/client").Prisma.Prisma__TavoloClient<{
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
    setStatoTavolo(id: string, stato: string): import("@prisma/client").Prisma.Prisma__TavoloClient<{
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
}
