"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PizzerieModule = void 0;
const common_1 = require("@nestjs/common");
const pizzerie_controller_1 = require("./pizzerie.controller");
const pizzerie_service_1 = require("./pizzerie.service");
let PizzerieModule = class PizzerieModule {
};
exports.PizzerieModule = PizzerieModule;
exports.PizzerieModule = PizzerieModule = __decorate([
    (0, common_1.Module)({
        controllers: [pizzerie_controller_1.PizzerieController],
        providers: [pizzerie_service_1.PizzerieService],
        exports: [pizzerie_service_1.PizzerieService],
    })
], PizzerieModule);
