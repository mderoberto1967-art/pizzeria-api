import { PrismaService } from '../../prisma.service';
export declare class PizzerieService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<({
        _count: {
            ordini: number;
            venditeStorico: number;
        };
    } & {
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
    })[]>;
    findById(id: string): Promise<({
        ordini: {
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
        }[];
        venditeStorico: {
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
        royaltyPeriodi: {
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
    } & {
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
    }) | null>;
    findByCodice(codice: string): Promise<{
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
    } | null>;
    create(data: any): Promise<{
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
    }>;
    update(id: string, data: any): Promise<{
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
    }>;
    toggleBlocco(id: string): Promise<{
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
    }>;
    toggleAttiva(id: string): Promise<{
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
    }>;
    remove(id: string): Promise<{
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
    }>;
    syncConfig(id: string): Promise<{
        pizzeriaId: string;
        nome: string;
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
        sale: ({
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
        })[];
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
    }>;
}
