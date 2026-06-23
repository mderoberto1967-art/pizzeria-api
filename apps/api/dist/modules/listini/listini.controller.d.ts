import { ListiniService } from './listini.service';
export declare class ListiniController {
    private readonly service;
    constructor(service: ListiniService);
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        id: string;
        nome: string;
        creatoA: Date;
        pizzeriaId: string | null;
        attivo: boolean;
        regole: string;
    }[]>;
    create(body: any): import("@prisma/client").Prisma.Prisma__ListinoClient<{
        id: string;
        nome: string;
        creatoA: Date;
        pizzeriaId: string | null;
        attivo: boolean;
        regole: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, body: any): import("@prisma/client").Prisma.Prisma__ListinoClient<{
        id: string;
        nome: string;
        creatoA: Date;
        pizzeriaId: string | null;
        attivo: boolean;
        regole: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    attiva(id: string): Promise<{
        id: string;
        nome: string;
        creatoA: Date;
        pizzeriaId: string | null;
        attivo: boolean;
        regole: string;
    }>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__ListinoClient<{
        id: string;
        nome: string;
        creatoA: Date;
        pizzeriaId: string | null;
        attivo: boolean;
        regole: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
