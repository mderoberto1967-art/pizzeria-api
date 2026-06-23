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
exports.PizzerieService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma.service");
function genCodice() {
    const parts = [];
    for (let i = 0; i < 3; i++) {
        parts.push(Math.random().toString(36).substring(2, 6).toUpperCase());
    }
    return `PIZZA-${parts.join('-')}`;
}
let PizzerieService = class PizzerieService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.pizzeria.findMany({
            orderBy: { creatoA: 'desc' },
            include: {
                _count: { select: { ordini: true, venditeStorico: true } },
            },
        });
    }
    async findById(id) {
        return this.prisma.pizzeria.findUnique({
            where: { id },
            include: {
                ordini: { orderBy: { creatoA: 'desc' }, take: 50 },
                venditeStorico: { orderBy: { data: 'desc' }, take: 100 },
                royaltyPeriodi: { orderBy: { periodo: 'desc' } },
            },
        });
    }
    async findByCodice(codice) {
        return this.prisma.pizzeria.findUnique({ where: { codice } });
    }
    async create(data) {
        const codice = genCodice();
        return this.prisma.pizzeria.create({
            data: { ...data, codice, attiva: true, bloccata: false },
        });
    }
    async update(id, data) {
        return this.prisma.pizzeria.update({
            where: { id },
            data,
        });
    }
    async toggleBlocco(id) {
        const p = await this.prisma.pizzeria.findUnique({ where: { id } });
        if (!p)
            throw new Error('Pizzeria non trovata');
        return this.prisma.pizzeria.update({
            where: { id },
            data: { bloccata: !p.bloccata },
        });
    }
    async toggleAttiva(id) {
        const p = await this.prisma.pizzeria.findUnique({ where: { id } });
        if (!p)
            throw new Error('Pizzeria non trovata');
        return this.prisma.pizzeria.update({
            where: { id },
            data: { attiva: !p.attiva },
        });
    }
    async remove(id) {
        return this.prisma.pizzeria.delete({ where: { id } });
    }
    async syncConfig(id) {
        const pizzeria = await this.prisma.pizzeria.findUnique({ where: { id } });
        if (!pizzeria)
            throw new Error('Pizzeria non trovata');
        const [categorie, sottoCategorie, ingredienti, articoli, listini, sale, clienti] = await Promise.all([
            this.prisma.categoria.findMany({ where: { pizzeriaId: id } }),
            this.prisma.sottoCategoria.findMany({ where: { categoria: { pizzeriaId: id } } }),
            this.prisma.ingrediente.findMany(),
            this.prisma.articolo.findMany({ where: { pizzeriaId: id } }),
            this.prisma.listino.findMany({ where: { pizzeriaId: id } }),
            this.prisma.sala.findMany({ where: { pizzeriaId: id }, include: { tavoli: true } }),
            this.prisma.cliente.findMany({ where: { pizzeriaId: id } }),
        ]);
        return {
            pizzeriaId: id,
            nome: pizzeria.nome,
            categorie,
            sottoCategorie,
            ingredienti,
            articoli,
            listini,
            sale,
            clienti,
        };
    }
};
exports.PizzerieService = PizzerieService;
exports.PizzerieService = PizzerieService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PizzerieService);
