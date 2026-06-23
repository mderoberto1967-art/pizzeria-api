import { BackupService } from './backup.service';
export declare class BackupController {
    private readonly service;
    constructor(service: BackupService);
    export(): Promise<{
        pizzerie: {
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
        }[];
        codici: {
            id: string;
            codice: string;
            creatoA: Date;
            pizzeriaId: string | null;
            tipo: string;
            giorniValidita: number;
            usato: boolean;
            dataScadenza: Date | null;
        }[];
        royalty: {
            id: string;
            creatoA: Date;
            pizzeriaId: string;
            note: string | null;
            totale: number;
            periodo: string;
            pizzeVendute: number;
            importoPerPizza: number;
            pagato: boolean;
        }[];
        categorie: {
            ordine: number;
            id: string;
            nome: string;
            attiva: boolean;
            pizzeriaId: string | null;
        }[];
        sottoCategorie: {
            ordine: number;
            id: string;
            nome: string;
            attiva: boolean;
            categoriaId: string;
        }[];
        ingredienti: {
            id: string;
            nome: string;
            creatoA: Date;
            disponibile: boolean;
            costoUnitario: number | null;
            allergeni: string | null;
        }[];
        articoli: {
            ordine: number;
            id: string;
            nome: string;
            creatoA: Date;
            aggiornatoA: Date;
            pizzeriaId: string | null;
            categoriaId: string;
            disponibile: boolean;
            sottoCategoriaId: string | null;
            tipo: string;
            prezzi: string;
            prezziMaxy: string;
            ingredientiBaseIds: string;
            categorieStampantiIds: string;
        }[];
        listini: {
            id: string;
            nome: string;
            creatoA: Date;
            pizzeriaId: string | null;
            attivo: boolean;
            regole: string;
        }[];
        categorieStampanti: {
            id: string;
            nome: string;
            colore: string | null;
        }[];
        stampanti: {
            id: string;
            nome: string;
            attiva: boolean;
            categoriaStampanteId: string | null;
            ip: string;
            porta: number;
            modello: string | null;
            protocollo: string | null;
        }[];
        sale: {
            ordine: number;
            id: string;
            nome: string;
            attiva: boolean;
            pizzeriaId: string | null;
        }[];
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
        clienti: {
            id: string;
            nome: string;
            indirizzo: string | null;
            telefono: string | null;
            email: string | null;
            creatoA: Date;
            pizzeriaId: string | null;
            cognome: string | null;
            note: string | null;
        }[];
        operatori: {
            id: string;
            nome: string;
            creatoA: Date;
            pizzeriaId: string | null;
            ruolo: string;
            pinHash: string | null;
            attivo: boolean;
        }[];
        ordini: ({
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
        })[];
        storico: {
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
        }[];
        comunicazioni: {
            id: string;
            pizzeriaId: string | null;
            tipo: string;
            mittente: string;
            testo: string;
            timestamp: Date;
            letta: boolean;
        }[];
        impostazioni: {
            id: string;
            chiave: string;
            valore: string;
            aggiornatoA: Date;
        }[];
        exportedAt: string;
    }>;
    import(body: any): Promise<{
        ok: boolean;
        message: string;
    }>;
}
