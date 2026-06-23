import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
export declare class RealtimeGateway implements OnGatewayConnection, OnGatewayDisconnect {
    server: Server;
    handleConnection(client: Socket): void;
    handleDisconnect(_client: Socket): void;
    emitOrdineCreato(ordine: {
        id: string;
        numero: number;
        stato: string;
        totale: number;
        canale: string;
        creatoA: Date;
    }): void;
    emitOrdineAggiornato(ordine: {
        id: string;
        numero: number;
        statoVecchio: string;
        statoNuovo: string;
    }): void;
    emitComunicazioneNuova(comunicazione: {
        id: string;
        mittente: string;
        testo: string;
        timestamp: Date;
    }): void;
    emitVenditeUpdate(riepilogo: {
        totaleOrdini: number;
        totaleImporto: number;
        pizzeVendute: number;
    }): void;
    emitTavoloAggiornato(tavolo: {
        id: string;
        stato: string;
    }): void;
    emitBackupRicevuto(info: {
        timestamp: Date;
        dimensioneBytes: number;
    }): void;
}
