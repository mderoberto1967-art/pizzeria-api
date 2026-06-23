import { CodiciService } from './codici.service';
import { AttivaCodiceDto } from './dto/attiva-codice.dto';
export declare class CodiciController {
    private readonly service;
    constructor(service: CodiciService);
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
    createBatch(data: {
        count: number;
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
    attiva(dto: AttivaCodiceDto): Promise<{
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
