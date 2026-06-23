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
exports.StampantiService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma.service");
let StampantiService = class StampantiService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAllCategorie() { return this.prisma.categoriaStampante.findMany({ include: { stampanti: true } }); }
    createCategoria(data) { return this.prisma.categoriaStampante.create({ data }); }
    updateCategoria(id, data) { return this.prisma.categoriaStampante.update({ where: { id }, data }); }
    removeCategoria(id) { return this.prisma.categoriaStampante.delete({ where: { id } }); }
    findAll() { return this.prisma.stampante.findMany(); }
    create(data) { return this.prisma.stampante.create({ data }); }
    update(id, data) { return this.prisma.stampante.update({ where: { id }, data }); }
    remove(id) { return this.prisma.stampante.delete({ where: { id } }); }
};
exports.StampantiService = StampantiService;
exports.StampantiService = StampantiService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], StampantiService);
