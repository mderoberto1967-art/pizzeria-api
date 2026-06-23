import { PrismaService } from '../../prisma.service';
export declare class StampantiService {
    private prisma;
    constructor(prisma: PrismaService);
    findAllCategorie(): import("@prisma/client").Prisma.PrismaPromise<({
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
    createCategoria(data: any): import("@prisma/client").Prisma.Prisma__CategoriaStampanteClient<{
        id: string;
        nome: string;
        colore: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    updateCategoria(id: string, data: any): import("@prisma/client").Prisma.Prisma__CategoriaStampanteClient<{
        id: string;
        nome: string;
        colore: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    removeCategoria(id: string): import("@prisma/client").Prisma.Prisma__CategoriaStampanteClient<{
        id: string;
        nome: string;
        colore: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
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
    create(data: any): import("@prisma/client").Prisma.Prisma__StampanteClient<{
        id: string;
        nome: string;
        attiva: boolean;
        categoriaStampanteId: string | null;
        ip: string;
        porta: number;
        modello: string | null;
        protocollo: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, data: any): import("@prisma/client").Prisma.Prisma__StampanteClient<{
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
