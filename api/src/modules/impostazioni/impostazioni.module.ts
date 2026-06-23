import { Module } from '@nestjs/common';
import { ImpostazioniController } from './impostazioni.controller';
import { ImpostazioniService } from './impostazioni.service';
@Module({ controllers: [ImpostazioniController], providers: [ImpostazioniService] })
export class ImpostazioniModule {}
