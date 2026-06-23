import { SyncService } from './sync.service';
export declare class SyncController {
    private readonly service;
    constructor(service: SyncService);
    seed(body: {
        storeData: any;
        pizzeriaId?: string;
    }): Promise<{
        ok: boolean;
        seeded: Record<string, number>;
    }>;
}
