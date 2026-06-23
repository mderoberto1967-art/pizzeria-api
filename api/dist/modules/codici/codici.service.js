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
exports.CodiciService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma.service");
function generaCodice() {
    const parts = [];
    for (let i = 0; i < 3; i++) {
        parts.push(Math.random().toString(36).substring(2, 6).toUpperCase());
    }
    return `PIZZA-${parts.join('-')}`;
}
let CodiciService = class CodiciService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.codiceAttivazione.findMany({ orderBy: { creatoA: 'desc' } });
    }
    async create(data) {
        const tipo = data.tipo || 'standard';
        const giorni = data.giorniValidita || (tipo === 'demo' ? 7 : 365);
        let codice = data.codice?.trim() || '';
        if (!codice)
            codice = generaCodice();
        try {
            return await this.prisma.codiceAttivazione.create({
                data: { codice, tipo, giorniValidita: giorni },
            });
        }
        catch {
            // se il codice esiste già (duplicato), generane uno nuovo
            return await this.prisma.codiceAttivazione.create({
                data: { codice: generaCodice(), tipo, giorniValidita: giorni },
            });
        }
    }
    async createMany(count, data) {
        const tipo = data.tipo || 'standard';
        const giorni = data.giorniValidita || (tipo === 'demo' ? 7 : 365);
        const codici = Array.from({ length: count }, () => ({
            codice: generaCodice(),
            tipo,
            giorniValidita: giorni,
        }));
        return this.prisma.codiceAttivazione.createMany({ data: codici });
    }
    async validate(codice) {
        const record = await this.prisma.codiceAttivazione.findUnique({ where: { codice } });
        if (!record)
            return { valido: false, motivo: 'Codice inesistente' };
        if (record.usato)
            return { valido: false, motivo: 'Codice già utilizzato' };
        if (record.dataScadenza && new Date(record.dataScadenza) < new Date()) {
            return { valido: false, motivo: 'Codice scaduto' };
        }
        return { valido: true, tipo: record.tipo, giorniValidita: record.giorniValidita };
    }
    async attiva(codice, nomePizzeria) {
        const record = await this.prisma.codiceAttivazione.findUnique({ where: { codice } });
        if (!record)
            throw new common_1.HttpException('Codice inesistente', common_1.HttpStatus.BAD_REQUEST);
        if (record.usato)
            throw new common_1.HttpException('Codice già utilizzato', common_1.HttpStatus.CONFLICT);
        if (record.dataScadenza && new Date(record.dataScadenza) < new Date()) {
            throw new common_1.HttpException('Codice scaduto', common_1.HttpStatus.BAD_REQUEST);
        }
        const pizzeria = await this.prisma.pizzeria.create({
            data: {
                nome: nomePizzeria || `Pizzeria ${codice}`,
                codice,
                attiva: true,
                bloccata: false,
            },
        });
        const dataScadenza = new Date();
        dataScadenza.setDate(dataScadenza.getDate() + record.giorniValidita);
        await this.prisma.codiceAttivazione.update({
            where: { id: record.id },
            data: { usato: true, dataScadenza, pizzeriaId: pizzeria.id },
        });
        return {
            pizzeriaId: pizzeria.id,
            nome: pizzeria.nome,
            codice: pizzeria.codice,
            scadenza: dataScadenza.toISOString(),
            tipo: record.tipo,
        };
    }
    async remove(id) {
        return this.prisma.codiceAttivazione.delete({ where: { id } });
    }
};
exports.CodiciService = CodiciService;
exports.CodiciService = CodiciService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CodiciService);
