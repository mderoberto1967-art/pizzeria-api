import { PrismaService } from '../../prisma.service';
import { RealtimeGateway } from '../realtime/realtime.gateway';
export declare class OrdiniService {
    private prisma;
    private realtime;
    constructor(prisma: PrismaService, realtime: RealtimeGateway);
    findAll(stato?: string, data?: string): Promise<({
        tavolo: {
            id: string;
            nome: string | null;
            attivo: boolean;
            salaId: string | null;
            numero: number;
            posti: number;
            stato: string;
            precontoRichiesto: boolean;
            precontoTotale: number | null;
        } | null;
        cliente: {
            id: string;
            nome: string;
            indirizzo: string | null;
            telefono: string | null;
            email: string | null;
            creatoA: Date;
            pizzeriaId: string | null;
            cognome: string | null;
            note: string | null;
        } | null;
        righe: {
            id: string;
            note: string | null;
            nomeSnapshot: string;
            formatoSnapshot: string | null;
            prezzoUnitario: number;
            quantita: number;
            totaleRiga: number;
            ingredientiAggiunti: string;
            ingredientiRimossi: string;
            articoloId: string | null;
            ordineId: string;
        }[];
    } & {
        id: string;
        creatoA: Date;
        aggiornatoA: Date;
        pizzeriaId: string;
        numero: number;
        stato: string;
        note: string | null;
        tavoloId: string | null;
        clienteId: string | null;
        canale: string;
        totale: number;
        numeroPizze: number;
        metodoPagamento: string | null;
        completatoA: Date | null;
    })[]>;
    findOne(id: string): import("@prisma/client").Prisma.Prisma__OrdineClient<({
        tavolo: {
            id: string;
            nome: string | null;
            attivo: boolean;
            salaId: string | null;
            numero: number;
            posti: number;
            stato: string;
            precontoRichiesto: boolean;
            precontoTotale: number | null;
        } | null;
        cliente: {
            id: string;
            nome: string;
            indirizzo: string | null;
            telefono: string | null;
            email: string | null;
            creatoA: Date;
            pizzeriaId: string | null;
            cognome: string | null;
            note: string | null;
        } | null;
        righe: {
            id: string;
            note: string | null;
            nomeSnapshot: string;
            formatoSnapshot: string | null;
            prezzoUnitario: number;
            quantita: number;
            totaleRiga: number;
            ingredientiAggiunti: string;
            ingredientiRimossi: string;
            articoloId: string | null;
            ordineId: string;
        }[];
    } & {
        id: string;
        creatoA: Date;
        aggiornatoA: Date;
        pizzeriaId: string;
        numero: number;
        stato: string;
        note: string | null;
        tavoloId: string | null;
        clienteId: string | null;
        canale: string;
        totale: number;
        numeroPizze: number;
        metodoPagamento: string | null;
        completatoA: Date | null;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    create(data: any): Promise<{
        righe: {
            id: string;
            note: string | null;
            nomeSnapshot: string;
            formatoSnapshot: string | null;
            prezzoUnitario: number;
            quantita: number;
            totaleRiga: number;
            ingredientiAggiunti: string;
            ingredientiRimossi: string;
            articoloId: string | null;
            ordineId: string;
        }[];
    } & {
        id: string;
        creatoA: Date;
        aggiornatoA: Date;
        pizzeriaId: string;
        numero: number;
        stato: string;
        note: string | null;
        tavoloId: string | null;
        clienteId: string | null;
        canale: string;
        totale: number;
        numeroPizze: number;
        metodoPagamento: string | null;
        completatoA: Date | null;
    }>;
    updateStato(id: string, stato: string): import("@prisma/client").Prisma.Prisma__OrdineClient<{
        id: string;
        creatoA: Date;
        aggiornatoA: Date;
        pizzeriaId: string;
        numero: number;
        stato: string;
        note: string | null;
        tavoloId: string | null;
        clienteId: string | null;
        canale: string;
        totale: number;
        numeroPizze: number;
        metodoPagamento: string | null;
        completatoA: Date | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__OrdineClient<{
        id: string;
        creatoA: Date;
        aggiornatoA: Date;
        pizzeriaId: string;
        numero: number;
        stato: string;
        note: string | null;
        tavoloId: string | null;
        clienteId: string | null;
        canale: string;
        totale: number;
        numeroPizze: number;
        metodoPagamento: string | null;
        completatoA: Date | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
