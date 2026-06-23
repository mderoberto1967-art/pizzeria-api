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
exports.StoricoService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma.service");
let StoricoService = class StoricoService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    rangeFilter(da, a) {
        const where = {};
        if (da || a) {
            where.data = {};
            if (da)
                where.data.gte = new Date(da);
            if (a)
                where.data.lte = new Date(a);
        }
        return where;
    }
    findAll(da, a, articoloId) {
        const where = this.rangeFilter(da, a);
        if (articoloId)
            where.articoloId = articoloId;
        return this.prisma.venditaStorico.findMany({ where, orderBy: { data: 'desc' } });
    }
    async riepilogo(periodo) {
        const rows = await this.prisma.venditaStorico.findMany({
            where: periodo ? { data: { gte: new Date(periodo + '-01') } } : undefined,
        });
        const totaleOrdini = rows.length;
        const totaleImporto = rows.reduce((s, r) => s + r.totale, 0);
        const pizzeVendute = rows.filter((r) => r.nomeSnapshot.toLowerCase().includes('pizza')).reduce((s, r) => s + r.quantita, 0);
        return { totaleOrdini, totaleImporto, pizzeVendute };
    }
    async perPizzeria(da, a) {
        const where = this.rangeFilter(da, a);
        const rows = await this.prisma.venditaStorico.findMany({ where, include: { pizzeria: true } });
        const map = {};
        for (const r of rows) {
            if (!r.nomeSnapshot.toLowerCase().includes('pizza'))
                continue;
            const pid = r.pizzeriaId;
            if (!map[pid])
                map[pid] = { pizzeriaId: pid, nome: r.pizzeria?.nome ?? pid, pizze: 0, totale: 0, royalty: 0 };
            map[pid].pizze += r.quantita ?? 0;
            map[pid].totale += r.totale ?? 0;
        }
        // Carica importo per pizza dalle pizzerie per royalty
        const pizzerie = await this.prisma.pizzeria.findMany({ select: { id: true, importoPerPizza: true } });
        const importiMap = Object.fromEntries(pizzerie.map((p) => [p.id, p.importoPerPizza ?? 0]));
        for (const k of Object.keys(map)) {
            map[k].royalty = map[k].pizze * (importiMap[k] ?? 0);
        }
        return Object.values(map);
    }
    async perMetodoPagamento(da, a) {
        const where = this.rangeFilter(da, a);
        const rows = await this.prisma.venditaStorico.findMany({ where });
        const map = {};
        for (const r of rows) {
            if (!r.nomeSnapshot.toLowerCase().includes('pizza'))
                continue;
            const method = r.metodoPagamento || 'contanti';
            if (!map[method])
                map[method] = { metodoPagamento: method, pizze: 0, importo: 0 };
            map[method].pizze += r.quantita ?? 0;
            map[method].importo += r.totale ?? 0;
        }
        return Object.values(map);
    }
};
exports.StoricoService = StoricoService;
exports.StoricoService = StoricoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], StoricoService);
