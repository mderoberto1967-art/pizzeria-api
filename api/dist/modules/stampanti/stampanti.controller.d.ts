import { StampantiService } from './stampanti.service';
export declare class CategorieStampantiController {
    private readonly service;
    constructor(service: StampantiService);
    findAll(): import("@prisma/client").Prisma.PrismaPromise<({
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
    } & {
        id: string;
        nome: string;
        colore: string | null;
    })[]>;
    create(body: any): import("@prisma/client").Prisma.Prisma__CategoriaStampanteClient<{
        id: string;
        nome: string;
        colore: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, body: any): import("@prisma/client").Prisma.Prisma__CategoriaStampanteClient<{
        id: string;
        nome: string;
        colore: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__CategoriaStampanteClient<{
        id: string;
        nome: string;
        colore: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
