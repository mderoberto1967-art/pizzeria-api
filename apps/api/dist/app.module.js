"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_module_1 = require("./modules/prisma/prisma.module");
const auth_module_1 = require("./modules/auth/auth.module");
const impostazioni_module_1 = require("./modules/impostazioni/impostazioni.module");
const operatori_module_1 = require("./modules/operatori/operatori.module");
const categorie_module_1 = require("./modules/categorie/categorie.module");
const sottocategorie_module_1 = require("./modules/sottocategorie/sottocategorie.module");
const ingredienti_module_1 = require("./modules/ingredienti/ingredienti.module");
const articoli_module_1 = require("./modules/articoli/articoli.module");
const listini_module_1 = require("./modules/listini/listini.module");
const stampanti_module_1 = require("./modules/stampanti/stampanti.module");
const sale_module_1 = require("./modules/sale/sale.module");
const clienti_module_1 = require("./modules/clienti/clienti.module");
const ordini_module_1 = require("./modules/ordini/ordini.module");
const storico_module_1 = require("./modules/storico/storico.module");
const comunicazioni_module_1 = require("./modules/comunicazioni/comunicazioni.module");
const backup_module_1 = require("./modules/backup/backup.module");
const royalty_module_1 = require("./modules/royalty/royalty.module");
const sync_module_1 = require("./modules/sync/sync.module");
const realtime_module_1 = require("./modules/realtime/realtime.module");
const pizzerie_module_1 = require("./modules/pizzerie/pizzerie.module");
const codici_module_1 = require("./modules/codici/codici.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            prisma_module_1.PrismaModule,
            auth_module_1.AuthModule,
            impostazioni_module_1.ImpostazioniModule,
            operatori_module_1.OperatoriModule,
            categorie_module_1.CategorieModule,
            sottocategorie_module_1.SottocategorieModule,
            ingredienti_module_1.IngredientiModule,
            articoli_module_1.ArticoliModule,
            listini_module_1.ListiniModule,
            stampanti_module_1.StampantiModule,
            sale_module_1.SaleModule,
            clienti_module_1.ClientiModule,
            ordini_module_1.OrdiniModule,
            storico_module_1.StoricoModule,
            comunicazioni_module_1.ComunicazioniModule,
            backup_module_1.BackupModule,
            royalty_module_1.RoyaltyModule,
            sync_module_1.SyncModule,
            realtime_module_1.RealtimeModule,
            pizzerie_module_1.PizzerieModule,
            codici_module_1.CodiciModule,
        ],
    })
], AppModule);
