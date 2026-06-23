import { ComunicazioniService } from './comunicazioni.service';
export declare class ComunicazioniController {
    private readonly service;
    constructor(service: ComunicazioniService);
    findAll(letta?: string): import("@prisma/client").Prisma.PrismaPromise<{
        id: string;
        pizzeriaId: string | null;
        tipo: string;
        mittente: string;
        testo: string;
        timestamp: Date;
        letta: boolean;
    }[]>;
    create(body: {
        mittente: string;
        testo: string;
    }): import("@prisma/client").Prisma.Prisma__ComunicazioneClient<{
        id: string;
        pizzeriaId: string | null;
        tipo: string;
        mittente: string;
        testo: string;
        timestamp: Date;
        letta: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    marcaLetta(id: string): import("@prisma/client").Prisma.Prisma__ComunicazioneClient<{
        id: string;
        pizzeriaId: string | null;
        tipo: string;
        mittente: string;
        testo: string;
        timestamp: Date;
        letta: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__ComunicazioneClient<{
        id: string;
        pizzeriaId: string | null;
        tipo: string;
        mittente: string;
        testo: string;
        timestamp: Date;
        letta: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
