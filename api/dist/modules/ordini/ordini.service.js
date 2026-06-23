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
exports.OrdiniService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma.service");
const realtime_gateway_1 = require("../realtime/realtime.gateway");
let OrdiniService = class OrdiniService {
    prisma;
    realtime;
    constructor(prisma, realtime) {
        this.prisma = prisma;
        this.realtime = realtime;
    }
    async findAll(stato, data) {
        const where = {};
        if (stato)
            where.stato = stato;
        if (data) {
            const d = new Date(data);
            const domani = new Date(d);
            domani.setDate(domani.getDate() + 1);
            where.creatoA = { gte: d, lt: domani };
        }
        return this.prisma.ordine.findMany({
            where,
            include: { righe: true, tavolo: true, cliente: true },
            orderBy: { creatoA: 'desc' },
        });
    }
    findOne(id) {
        return this.prisma.ordine.findUnique({ where: { id }, include: { righe: true, tavolo: true, cliente: true } });
    }
    async create(data) {
        const { righe, tavoloId, clienteId, ...ordineData } = data;
        const count = await this.prisma.ordine.count();
        const [tavoloEsiste, clienteEsiste] = await Promise.all([
            tavoloId ? !!(await this.prisma.tavolo.findUnique({ where: { id: tavoloId } })) : false,
            clienteId ? !!(await this.prisma.cliente.findUnique({ where: { id: clienteId } })) : false,
        ]);
        const righeSafe = righe
            ? await Promise.all(righe.map(async (r) => {
                const hasArt = r.articoloId
                    ? !!(await this.prisma.articolo.findUnique({ where: { id: r.articoloId } }))
                    : false;
                return {
                    ...r,
                    articoloId: hasArt ? r.articoloId : null,
                    ingredientiAggiunti: JSON.stringify(r.ingredientiAggiunti ?? []),
                    ingredientiRimossi: JSON.stringify(r.ingredientiRimossi ?? []),
                };
            }))
            : [];
        const ordine = await this.prisma.ordine.create({
            data: {
                ...ordineData,
                numero: count + 1,
                tavoloId: tavoloEsiste ? tavoloId : null,
                clienteId: clienteEsiste ? clienteId : null,
                pizzeriaId: data.pizzeriaId ?? 'pizzeria-default',
                righe: righeSafe.length ? { create: righeSafe } : undefined,
            },
            include: { righe: true },
        });
        this.realtime.emitOrdineCreato(ordine);
        return ordine;
    }
    updateStato(id, stato) {
        return this.prisma.ordine.update({ where: { id }, data: { stato } });
    }
    remove(id) {
        return this.prisma.ordine.delete({ where: { id } });
    }
};
exports.OrdiniService = OrdiniService;
exports.OrdiniService = OrdiniService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, realtime_gateway_1.RealtimeGateway])
], OrdiniService);
