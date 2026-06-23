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
exports.BackupService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma.service");
let BackupService = class BackupService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async export() {
        const pizzerie = await this.prisma.pizzeria.findMany();
        const codici = await this.prisma.codiceAttivazione.findMany();
        const royalty = await this.prisma.royaltyPeriodo.findMany();
        const [categorie, sottoCategorie, ingredienti, articoli, listini, categorieStampanti, stampanti, sale, tavoli, clienti, ordini, storico, comunicazioni, impostazioni, operatori] = await Promise.all([
            this.prisma.categoria.findMany(),
            this.prisma.sottoCategoria.findMany(),
            this.prisma.ingrediente.findMany(),
            this.prisma.articolo.findMany(),
            this.prisma.listino.findMany(),
            this.prisma.categoriaStampante.findMany(),
            this.prisma.stampante.findMany(),
            this.prisma.sala.findMany(),
            this.prisma.tavolo.findMany(),
            this.prisma.cliente.findMany(),
            this.prisma.ordine.findMany({ include: { righe: true } }),
            this.prisma.venditaStorico.findMany(),
            this.prisma.comunicazione.findMany(),
            this.prisma.impostazione.findMany(),
            this.prisma.operatore.findMany(),
        ]);
        return { pizzerie, codici, royalty, categorie, sottoCategorie, ingredienti, articoli, listini, categorieStampanti, stampanti,
            sale, tavoli, clienti, operatori, ordini, storico, comunicazioni, impostazioni, exportedAt: new Date().toISOString() };
    }
    async import(data) {
        // Verifica se il database è vuoto prima dell'import
        const count = await this.prisma.pizzeria.count();
        if (count > 0 && data.pizzerie) {
            throw new common_1.InternalServerErrorException('Database già popolato. Reset prima dell\'import.');
        }
        // Importa pizzerie e codici se esistono
        if (data.pizzerie) {
            const pizzerie = data.pizzerie.map((p) => ({ ...p, id: undefined }));
            for (const p of pizzerie) {
                await this.prisma.pizzeria.upsert({ where: { codice: p.codice }, update: {}, create: p });
            }
        }
        if (data.codici) {
            const codici = data.codici.map((c) => ({ ...c, id: undefined }));
            for (const c of codici) {
                await this.prisma.codiceAttivazione.upsert({ where: { codice: c.codice }, update: {}, create: c });
            }
        }
        return { ok: true, message: 'Backup importato con successo' };
    }
};
exports.BackupService = BackupService;
exports.BackupService = BackupService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BackupService);
