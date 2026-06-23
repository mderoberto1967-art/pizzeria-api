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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoricoController = void 0;
const common_1 = require("@nestjs/common");
const storico_service_1 = require("./storico.service");
let StoricoController = class StoricoController {
    service;
    constructor(service) {
        this.service = service;
    }
    findAll(da, a, articoloId) { return this.service.findAll(da, a, articoloId); }
    riepilogo(periodo) { return this.service.riepilogo(periodo); }
    pizzerie(da, a) { return this.service.perPizzeria(da, a); }
    pagamenti(da, a) { return this.service.perMetodoPagamento(da, a); }
};
exports.StoricoController = StoricoController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('da')),
    __param(1, (0, common_1.Query)('a')),
    __param(2, (0, common_1.Query)('articoloId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], StoricoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('riepilogo'),
    __param(0, (0, common_1.Query)('periodo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StoricoController.prototype, "riepilogo", null);
__decorate([
    (0, common_1.Get)('pizzerie'),
    __param(0, (0, common_1.Query)('da')),
    __param(1, (0, common_1.Query)('a')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], StoricoController.prototype, "pizzerie", null);
__decorate([
    (0, common_1.Get)('pagamenti'),
    __param(0, (0, common_1.Query)('da')),
    __param(1, (0, common_1.Query)('a')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], StoricoController.prototype, "pagamenti", null);
exports.StoricoController = StoricoController = __decorate([
    (0, common_1.Controller)('storico'),
    __metadata("design:paramtypes", [storico_service_1.StoricoService])
], StoricoController);
