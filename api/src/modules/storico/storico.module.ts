import { Module } from '@nestjs/common';
import { StoricoController } from './storico.controller';
import { StoricoService } from './storico.service';
@Module({ controllers: [StoricoController], providers: [StoricoService], exports: [StoricoService] })
export class StoricoModule {}
