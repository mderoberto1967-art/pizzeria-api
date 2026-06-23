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
exports.SaleService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma.service");
let SaleService = class SaleService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAllSale() { return this.prisma.sala.findMany({ orderBy: { ordine: 'asc' }, include: { tavoli: true } }); }
    createSala(data) { return this.prisma.sala.create({ data }); }
    updateSala(id, data) { return this.prisma.sala.update({ where: { id }, data }); }
    removeSala(id) { return this.prisma.sala.delete({ where: { id } }); }
    findAllTavoli(salaId) { return this.prisma.tavolo.findMany({ where: salaId ? { salaId } : undefined }); }
    createTavolo(data) { return this.prisma.tavolo.create({ data }); }
    updateTavolo(id, data) { return this.prisma.tavolo.update({ where: { id }, data }); }
    setStatoTavolo(id, stato) { return this.prisma.tavolo.update({ where: { id }, data: { stato } }); }
    removeTavolo(id) { return this.prisma.tavolo.delete({ where: { id } }); }
    richiediPreconto(id, body) {
        return this.prisma.tavolo.update({
            where: { id },
            data: { precontoRichiesto: true, precontoTotale: body?.totale ?? null },
        });
    }
};
exports.SaleService = SaleService;
exports.SaleService = SaleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SaleService);
