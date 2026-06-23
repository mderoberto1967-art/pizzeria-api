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
exports.TavoliController = void 0;
const common_1 = require("@nestjs/common");
const sale_service_1 = require("./sale.service");
let TavoliController = class TavoliController {
    service;
    constructor(service) {
        this.service = service;
    }
    findAll(salaId) { return this.service.findAllTavoli(salaId); }
    create(body) { return this.service.createTavolo(body); }
    update(id, body) { return this.service.updateTavolo(id, body); }
    setStato(id, body) { return this.service.setStatoTavolo(id, body.stato); }
    remove(id) { return this.service.removeTavolo(id); }
};
exports.TavoliController = TavoliController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('salaId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TavoliController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TavoliController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], TavoliController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)(':id/stato'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], TavoliController.prototype, "setStato", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TavoliController.prototype, "remove", null);
exports.TavoliController = TavoliController = __decorate([
    (0, common_1.Controller)('tavoli'),
    __metadata("design:paramtypes", [sale_service_1.SaleService])
], TavoliController);
