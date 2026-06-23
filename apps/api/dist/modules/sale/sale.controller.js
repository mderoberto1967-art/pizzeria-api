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
exports.SaleController = void 0;
const common_1 = require("@nestjs/common");
const sale_service_1 = require("./sale.service");
let SaleController = class SaleController {
    service;
    constructor(service) {
        this.service = service;
    }
    findAll() { return this.service.findAllSale(); }
    create(body) { return this.service.createSala(body); }
    update(id, body) { return this.service.updateSala(id, body); }
    remove(id) { return this.service.removeSala(id); }
    findTavoli() { return this.service.findAllTavoli(); }
    createTavolo(body) { return this.service.createTavolo(body); }
    updateTavolo(id, body) { return this.service.updateTavolo(id, body); }
    setStatoTavolo(id, body) { return this.service.setStatoTavolo(id, body.stato); }
    richiediPreconto(id, body) { return this.service.richiediPreconto(id, body); }
    removeTavolo(id) { return this.service.removeTavolo(id); }
};
exports.SaleController = SaleController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SaleController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SaleController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], SaleController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SaleController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('tavoli'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SaleController.prototype, "findTavoli", null);
__decorate([
    (0, common_1.Post)('tavoli'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SaleController.prototype, "createTavolo", null);
__decorate([
    (0, common_1.Patch)('tavoli/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], SaleController.prototype, "updateTavolo", null);
__decorate([
    (0, common_1.Patch)('tavoli/:id/stato'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], SaleController.prototype, "setStatoTavolo", null);
__decorate([
    (0, common_1.Post)('tavoli/:id/preconto'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], SaleController.prototype, "richiediPreconto", null);
__decorate([
    (0, common_1.Delete)('tavoli/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SaleController.prototype, "removeTavolo", null);
exports.SaleController = SaleController = __decorate([
    (0, common_1.Controller)('sale'),
    __metadata("design:paramtypes", [sale_service_1.SaleService])
], SaleController);
