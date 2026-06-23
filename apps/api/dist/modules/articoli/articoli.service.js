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
exports.ArticoliService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma.service");
let ArticoliService = class ArticoliService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAll(categoriaId, disponibile) {
        return this.prisma.articolo.findMany({
            where: {
                ...(categoriaId ? { categoriaId } : {}),
                ...(disponibile !== undefined ? { disponibile: disponibile === 'true' } : {}),
            },
            orderBy: { ordine: 'asc' },
        });
    }
    findOne(id) {
        return this.prisma.articolo.findUnique({ where: { id } });
    }
    create(data) {
        const { prezzi, prezziMaxy, ingredientiBaseIds, categorieStampantiIds, ...rest } = data;
        return this.prisma.articolo.create({
            data: {
                ...rest,
                prezzi: prezzi ? JSON.stringify(prezzi) : '{}',
                prezziMaxy: prezziMaxy ? JSON.stringify(prezziMaxy) : '{}',
                ingredientiBaseIds: ingredientiBaseIds ? JSON.stringify(ingredientiBaseIds) : '[]',
                categorieStampantiIds: categorieStampantiIds ? JSON.stringify(categorieStampantiIds) : '[]',
            },
        });
    }
    update(id, data) {
        const { prezzi, prezziMaxy, ingredientiBaseIds, categorieStampantiIds, ...rest } = data;
        return this.prisma.articolo.update({
            where: { id },
            data: {
                ...rest,
                ...(prezzi !== undefined ? { prezzi: JSON.stringify(prezzi) } : {}),
                ...(prezziMaxy !== undefined ? { prezziMaxy: JSON.stringify(prezziMaxy) } : {}),
                ...(ingredientiBaseIds !== undefined ? { ingredientiBaseIds: JSON.stringify(ingredientiBaseIds) } : {}),
                ...(categorieStampantiIds !== undefined ? { categorieStampantiIds: JSON.stringify(categorieStampantiIds) } : {}),
            },
        });
    }
    setDisponibilita(id, disponibile) {
        return this.prisma.articolo.update({ where: { id }, data: { disponibile } });
    }
    remove(id) {
        return this.prisma.articolo.delete({ where: { id } });
    }
};
exports.ArticoliService = ArticoliService;
exports.ArticoliService = ArticoliService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ArticoliService);
