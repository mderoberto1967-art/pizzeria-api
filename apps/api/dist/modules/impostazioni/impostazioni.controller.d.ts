import { ImpostazioniService } from './impostazioni.service';
export declare class ImpostazioniController {
    private readonly service;
    constructor(service: ImpostazioniService);
    findAll(): Promise<Record<string, unknown>>;
    upsert(body: Record<string, unknown>): Promise<Record<string, unknown>>;
}
