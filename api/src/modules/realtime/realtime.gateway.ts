import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

const VALID_RUOLI = ['pizzeria', 'regia', 'mobile'] as const;
type Ruolo = (typeof VALID_RUOLI)[number];

@WebSocketGateway({
  cors: { origin: '*' },
  namespace: '/realtime',
})
export class RealtimeGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server!: Server;

  handleConnection(client: Socket) {
    const token = client.handshake.auth['token'] as string | undefined;
    const expected = process.env.PIZZERIA_TOKEN ?? 'pizza-secret-2024';

    if (!token || token !== expected) {
      client.emit('error', { message: 'Token non valido' });
      client.disconnect(true);
      return;
    }

    const ruolo = client.handshake.auth['ruolo'] as Ruolo | undefined;
    if (ruolo && VALID_RUOLI.includes(ruolo)) {
      client.join(ruolo);
    }
    client.join('broadcast');
  }

  handleDisconnect(_client: Socket) {
    // cleanup automatico
  }

  emitOrdineCreato(ordine: { id: string; numero: number; stato: string; totale: number; canale: string; creatoA: Date }) {
    this.server.to('pizzeria').to('regia').emit('ordine.creato', {
      ordineId: ordine.id,
      numero: ordine.numero,
      stato: ordine.stato,
      totale: ordine.totale,
      canale: ordine.canale,
      creatoA: ordine.creatoA,
    });
  }

  emitOrdineAggiornato(ordine: { id: string; numero: number; statoVecchio: string; statoNuovo: string }) {
    this.server.to('pizzeria').to('regia').to('mobile').emit('ordine.aggiornato', {
      ordineId: ordine.id,
      numero: ordine.numero,
      statoVecchio: ordine.statoVecchio,
      statoNuovo: ordine.statoNuovo,
      aggiornatoA: new Date(),
    });
  }

  emitComunicazioneNuova(comunicazione: { id: string; mittente: string; testo: string; timestamp: Date }) {
    const destinatario = comunicazione.mittente === 'regia' ? 'pizzeria' : 'regia';
    this.server.to(destinatario).emit('comunicazione.nuova', {
      comunicazioneId: comunicazione.id,
      mittente: comunicazione.mittente,
      testo: comunicazione.testo,
      timestamp: comunicazione.timestamp,
    });
  }

  emitVenditeUpdate(riepilogo: { totaleOrdini: number; totaleImporto: number; pizzeVendute: number }) {
    this.server.to('regia').emit('vendite.update', riepilogo);
  }

  emitTavoloAggiornato(tavolo: { id: string; stato: string }) {
    this.server.to('pizzeria').emit('tavolo.aggiornato', { tavoloId: tavolo.id, stato: tavolo.stato });
  }

  emitBackupRicevuto(info: { timestamp: Date; dimensioneBytes: number }) {
    this.server.to('regia').emit('backup.ricevuto', info);
  }
}
