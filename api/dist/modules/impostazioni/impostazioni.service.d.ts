import { PrismaService } from '../../prisma.service';
export declare class ImpostazioniService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<Record<string, unknown>>;
    upsert(data: Record<string, unknown>): Promise<Record<string, unknown>>;
}
