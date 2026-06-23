import { StampantiService } from './stampanti.service';
export declare class StampantiController {
    private readonly service;
    constructor(service: StampantiService);
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        id: string;
        nome: string;
        attiva: boolean;
        categoriaStampanteId: string | null;
        ip: string;
        porta: number;
        modello: string | null;
        protocollo: string | null;
    }[]>;
    create(body: any): import("@prisma/client").Prisma.Prisma__StampanteClient<{
        id: string;
        nome: string;
        attiva: boolean;
        categoriaStampanteId: string | null;
        ip: string;
        porta: number;
        modello: string | null;
        protocollo: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, body: any): import("@prisma/client").Prisma.Prisma__StampanteClient<{
        id: string;
        nome: string;
        attiva: boolean;
        categoriaStampanteId: string | null;
        ip: string;
        porta: number;
        modello: string | null;
        protocollo: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__StampanteClient<{
        id: string;
        nome: string;
        attiva: boolean;
        categoriaStampanteId: string | null;
        ip: string;
        porta: number;
        modello: string | null;
        protocollo: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
