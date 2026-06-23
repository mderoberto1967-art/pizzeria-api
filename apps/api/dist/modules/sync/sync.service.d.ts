import { PrismaService } from '../../prisma.service';
export declare class SyncService {
    private prisma;
    constructor(prisma: PrismaService);
    seed(storeData: any, pizzeriaId?: string): Promise<{
        ok: boolean;
        seeded: Record<string, number>;
    }>;
}
