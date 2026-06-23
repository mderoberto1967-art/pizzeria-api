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
exports.RoyaltyService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma.service");
let RoyaltyService = class RoyaltyService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    // Legge tutti i periodi royalty, opzionalmente filtrati per pizzeria
    findAll(periodo, pizzeriaId) {
        const where = {};
        if (periodo)
            where.periodo = periodo;
        if (pizzeriaId)
            where.pizzeriaId = pizzeriaId;
        return this.prisma.royaltyPeriodo.findMany({
            where,
            orderBy: { periodo: 'desc' },
            include: { pizzeria: true },
        });
    }
    // Calcola royalty per una pizzeria in un periodo
    async calcola(pizzeriaId, periodo, importoPerPizza) {
        // Conta le pizze vendute in quel periodo
        const inizio = new Date(`${periodo}-01`);
        const fine = new Date(inizio.getFullYear(), inizio.getMonth() + 1, 0);
        const vendite = await this.prisma.venditaStorico.aggregate({
            where: {
                pizzeriaId,
                tipo: 'pizza',
                data: { gte: inizio, lte: fine },
            },
            _sum: { quantita: true },
        });
        const pizzeVendute = vendite._sum.quantita ?? 0;
        const totale = pizzeVendute * importoPerPizza;
        // Upsert
        return this.prisma.royaltyPeriodo.upsert({
            where: { pizzeriaId_periodo: { pizzeriaId, periodo } },
            update: { pizzeVendute, importoPerPizza, totale },
            create: {
                pizzeriaId,
                periodo,
                pizzeVendute,
                importoPerPizza,
                totale,
            },
        });
    }
    create(data) {
        return this.prisma.royaltyPeriodo.create({ data });
    }
    update(id, data) {
        return this.prisma.royaltyPeriodo.update({ where: { id }, data });
    }
    remove(id) {
        return this.prisma.royaltyPeriodo.delete({ where: { id } });
    }
};
exports.RoyaltyService = RoyaltyService;
exports.RoyaltyService = RoyaltyService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RoyaltyService);
