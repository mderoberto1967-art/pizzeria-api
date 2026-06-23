import { PrismaService } from '../../prisma.service';
export declare class CodiciService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        id: string;
        codice: string;
        creatoA: Date;
        pizzeriaId: string | null;
        tipo: string;
        giorniValidita: number;
        usato: boolean;
        dataScadenza: Date | null;
    }[]>;
    create(data: {
        tipo?: string;
        giorniValidita?: number;
        codice?: string;
    }): Promise<{
        id: string;
        codice: string;
        creatoA: Date;
        pizzeriaId: string | null;
        tipo: string;
        giorniValidita: number;
        usato: boolean;
        dataScadenza: Date | null;
    }>;
    createMany(count: number, data: {
        tipo?: string;
        giorniValidita?: number;
    }): Promise<import("@prisma/client").Prisma.BatchPayload>;
    validate(codice: string): Promise<{
        valido: boolean;
        motivo: string;
        tipo?: undefined;
        giorniValidita?: undefined;
    } | {
        valido: boolean;
        tipo: string;
        giorniValidita: number;
        motivo?: undefined;
    }>;
    attiva(codice: string, nomePizzeria?: string): Promise<{
        pizzeriaId: string;
        nome: string;
        codice: string;
        scadenza: string;
        tipo: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        codice: string;
        creatoA: Date;
        pizzeriaId: string | null;
        tipo: string;
        giorniValidita: number;
        usato: boolean;
        dataScadenza: Date | null;
    }>;
}
