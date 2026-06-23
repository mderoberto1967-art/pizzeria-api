import { Module } from '@nestjs/common';
import { ComunicazioniController } from './comunicazioni.controller';
import { ComunicazioniService } from './comunicazioni.service';
@Module({ controllers: [ComunicazioniController], providers: [ComunicazioniService], exports: [ComunicazioniService] })
export class ComunicazioniModule {}
