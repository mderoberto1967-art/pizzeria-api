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
exports.ComunicazioniService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma.service");
let ComunicazioniService = class ComunicazioniService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAll(letta) {
        return this.prisma.comunicazione.findMany({
            where: letta !== undefined ? { letta: letta === 'true' } : undefined,
            orderBy: { timestamp: 'desc' },
        });
    }
    create(data) {
        return this.prisma.comunicazione.create({ data });
    }
    marcaLetta(id) {
        return this.prisma.comunicazione.update({ where: { id }, data: { letta: true } });
    }
    remove(id) {
        return this.prisma.comunicazione.delete({ where: { id } });
    }
};
exports.ComunicazioniService = ComunicazioniService;
exports.ComunicazioniService = ComunicazioniService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ComunicazioniService);
