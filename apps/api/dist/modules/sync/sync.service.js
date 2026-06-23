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
exports.SyncService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma.service");
let SyncService = class SyncService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async seed(storeData, pizzeriaId) {
        const pid = pizzeriaId || this.prisma.defaultPizzeria;
        const results = {};
        if (storeData.categorieMenu?.length) {
            for (const c of storeData.categorieMenu) {
                await this.prisma.categoria.upsert({
                    where: { id: c.id },
                    update: { nome: c.nome, ordine: c.ordine ?? 0 },
                    create: { id: c.id, nome: c.nome, ordine: c.ordine ?? 0, pizzeriaId: pid },
                });
            }
            results.categorie = storeData.categorieMenu.length;
        }
        if (storeData.sottoCategorie?.length) {
            for (const sc of storeData.sottoCategorie) {
                await this.prisma.sottoCategoria.upsert({
                    where: { id: sc.id },
                    update: { nome: sc.nome, ordine: sc.ordine ?? 0, categoriaId: sc.categoriaId },
                    create: { id: sc.id, nome: sc.nome, ordine: sc.ordine ?? 0, categoriaId: sc.categoriaId },
                });
            }
            results.sottoCategorie = storeData.sottoCategorie.length;
        }
        if (storeData.ingredienti?.length) {
            for (const ing of storeData.ingredienti) {
                await this.prisma.ingrediente.upsert({
                    where: { id: ing.id },
                    update: { nome: ing.nome, disponibile: ing.disponibile ?? true },
                    create: { id: ing.id, nome: ing.nome, disponibile: ing.disponibile ?? true },
                });
            }
            results.ingredienti = storeData.ingredienti.length;
        }
        if (storeData.articoliMenu?.length) {
            for (const a of storeData.articoliMenu) {
                await this.prisma.articolo.upsert({
                    where: { id: a.id },
                    update: {
                        nome: a.nome, tipo: a.tipo ?? 'altro', disponibile: a.disponibile ?? true,
                        categoriaId: a.categoriaId, sottoCategoriaId: a.sottoCategoriaId ?? null,
                        prezzi: JSON.stringify(a.prezzi ?? {}), prezziMaxy: JSON.stringify(a.prezziMaxy ?? {}),
                        ingredientiBaseIds: JSON.stringify(a.ingredientiBaseIds ?? []),
                        categorieStampantiIds: JSON.stringify(a.categorieStampantiIds ?? []),
                    },
                    create: {
                        id: a.id, nome: a.nome, tipo: a.tipo ?? 'altro', disponibile: a.disponibile ?? true,
                        categoriaId: a.categoriaId, sottoCategoriaId: a.sottoCategoriaId ?? null,
                        prezzi: JSON.stringify(a.prezzi ?? {}), prezziMaxy: JSON.stringify(a.prezziMaxy ?? {}),
                        ingredientiBaseIds: JSON.stringify(a.ingredientiBaseIds ?? []),
                        categorieStampantiIds: JSON.stringify(a.categorieStampantiIds ?? []),
                        pizzeriaId: pid,
                    },
                });
            }
            results.articoli = storeData.articoliMenu.length;
        }
        if (storeData.clienti?.length) {
            for (const c of storeData.clienti) {
                await this.prisma.cliente.upsert({
                    where: { id: c.id },
                    update: { nome: c.nome, cognome: c.cognome, telefono: c.telefono, email: c.email },
                    create: { id: c.id, nome: c.nome, cognome: c.cognome, telefono: c.telefono, email: c.email, pizzeriaId: pid },
                });
            }
            results.clienti = storeData.clienti.length;
        }
        return { ok: true, seeded: results };
    }
};
exports.SyncService = SyncService;
exports.SyncService = SyncService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SyncService);
