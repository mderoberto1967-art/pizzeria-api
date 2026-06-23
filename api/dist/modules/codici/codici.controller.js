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
exports.CodiciController = void 0;
const common_1 = require("@nestjs/common");
const codici_service_1 = require("./codici.service");
const attiva_codice_dto_1 = require("./dto/attiva-codice.dto");
let CodiciController = class CodiciController {
    service;
    constructor(service) {
        this.service = service;
    }
    findAll() { return this.service.findAll(); }
    create(data) {
        return this.service.create(data);
    }
    createBatch(data) {
        return this.service.createMany(data.count, data);
    }
    validate(codice) { return this.service.validate(codice); }
    attiva(dto) {
        return this.service.attiva(dto.codice, dto.nomePizzeria);
    }
    remove(id) { return this.service.remove(id); }
};
exports.CodiciController = CodiciController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CodiciController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CodiciController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('batch'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CodiciController.prototype, "createBatch", null);
__decorate([
    (0, common_1.Post)('valida'),
    __param(0, (0, common_1.Body)('codice')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CodiciController.prototype, "validate", null);
__decorate([
    (0, common_1.Post)('attiva'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [attiva_codice_dto_1.AttivaCodiceDto]),
    __metadata("design:returntype", void 0)
], CodiciController.prototype, "attiva", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CodiciController.prototype, "remove", null);
exports.CodiciController = CodiciController = __decorate([
    (0, common_1.Controller)('codici'),
    __metadata("design:paramtypes", [codici_service_1.CodiciService])
], CodiciController);
