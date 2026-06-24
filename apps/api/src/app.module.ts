import { Module } from '@nestjs/common';
import { PrismaModule } from './modules/prisma/prisma.module';
import { AuthModule } from './modules/auth/auth.module';
import { ImpostazioniModule } from './modules/impostazioni/impostazioni.module';
import { OperatoriModule } from './modules/operatori/operatori.module';
import { CategorieModule } from './modules/categorie/categorie.module';
import { SottocategorieModule } from './modules/sottocategorie/sottocategorie.module';
import { IngredientiModule } from './modules/ingredienti/ingredienti.module';
import { ArticoliModule } from './modules/articoli/articoli.module';
import { ListiniModule } from './modules/listini/listini.module';
import { StampantiModule } from './modules/stampanti/stampanti.module';
import { SaleModule } from './modules/sale/sale.module';
import { ClientiModule } from './modules/clienti/clienti.module';
import { OrdiniModule } from './modules/ordini/ordini.module';
import { StoricoModule } from './modules/storico/storico.module';
import { ComunicazioniModule } from './modules/comunicazioni/comunicazioni.module';
import { BackupModule } from './modules/backup/backup.module';
import { RoyaltyModule } from './modules/royalty/royalty.module';
import { SyncModule } from './modules/sync/sync.module';
import { RealtimeModule } from './modules/realtime/realtime.module';
import { PizzerieModule } from './modules/pizzerie/pizzerie.module';
import { CodiciModule } from './modules/codici/codici.module';
import { HealthController } from './health.controller';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    ImpostazioniModule,
    OperatoriModule,
    CategorieModule,
    SottocategorieModule,
    IngredientiModule,
    ArticoliModule,
    ListiniModule,
    StampantiModule,
    SaleModule,
    ClientiModule,
    OrdiniModule,
    StoricoModule,
    ComunicazioniModule,
    BackupModule,
    RoyaltyModule,
    SyncModule,
    RealtimeModule,
    PizzerieModule,
    CodiciModule,
  ],
  controllers: [HealthController],
})
export class AppModule {}
