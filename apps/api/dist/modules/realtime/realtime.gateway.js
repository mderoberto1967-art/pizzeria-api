"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RealtimeGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const VALID_RUOLI = ['pizzeria', 'regia', 'mobile'];
let RealtimeGateway = class RealtimeGateway {
    server;
    handleConnection(client) {
        const token = client.handshake.auth['token'];
        const expected = process.env.PIZZERIA_TOKEN ?? 'pizza-secret-2024';
        if (!token || token !== expected) {
            client.emit('error', { message: 'Token non valido' });
            client.disconnect(true);
            return;
        }
        const ruolo = client.handshake.auth['ruolo'];
        if (ruolo && VALID_RUOLI.includes(ruolo)) {
            client.join(ruolo);
        }
        client.join('broadcast');
    }
    handleDisconnect(_client) {
        // cleanup automatico
    }
    emitOrdineCreato(ordine) {
        this.server.to('pizzeria').to('regia').emit('ordine.creato', {
            ordineId: ordine.id,
            numero: ordine.numero,
            stato: ordine.stato,
            totale: ordine.totale,
            canale: ordine.canale,
            creatoA: ordine.creatoA,
        });
    }
    emitOrdineAggiornato(ordine) {
        this.server.to('pizzeria').to('regia').to('mobile').emit('ordine.aggiornato', {
            ordineId: ordine.id,
            numero: ordine.numero,
            statoVecchio: ordine.statoVecchio,
            statoNuovo: ordine.statoNuovo,
            aggiornatoA: new Date(),
        });
    }
    emitComunicazioneNuova(comunicazione) {
        const destinatario = comunicazione.mittente === 'regia' ? 'pizzeria' : 'regia';
        this.server.to(destinatario).emit('comunicazione.nuova', {
            comunicazioneId: comunicazione.id,
            mittente: comunicazione.mittente,
            testo: comunicazione.testo,
            timestamp: comunicazione.timestamp,
        });
    }
    emitVenditeUpdate(riepilogo) {
        this.server.to('regia').emit('vendite.update', riepilogo);
    }
    emitTavoloAggiornato(tavolo) {
        this.server.to('pizzeria').emit('tavolo.aggiornato', { tavoloId: tavolo.id, stato: tavolo.stato });
    }
    emitBackupRicevuto(info) {
        this.server.to('regia').emit('backup.ricevuto', info);
    }
};
exports.RealtimeGateway = RealtimeGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], RealtimeGateway.prototype, "server", void 0);
exports.RealtimeGateway = RealtimeGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({
        cors: { origin: '*' },
        namespace: '/realtime',
    })
], RealtimeGateway);
