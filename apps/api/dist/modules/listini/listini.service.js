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
exports.ListiniService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma.service");
let ListiniService = class ListiniService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAll() { return this.prisma.listino.findMany(); }
    create(data) {
        const { regole, ...rest } = data;
        return this.prisma.listino.create({ data: { ...rest, regole: regole ? JSON.stringify(regole) : '[]' } });
    }
    update(id, data) {
        const { regole, ...rest } = data;
        return this.prisma.listino.update({ where: { id }, data: { ...rest, ...(regole !== undefined ? { regole: JSON.stringify(regole) } : {}) } });
    }
    async attiva(id) {
        await this.prisma.listino.updateMany({ data: { attivo: false } });
        return this.prisma.listino.update({ where: { id }, data: { attivo: true } });
    }
    remove(id) { return this.prisma.listino.delete({ where: { id } }); }
};
exports.ListiniService = ListiniService;
exports.ListiniService = ListiniService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ListiniService);
