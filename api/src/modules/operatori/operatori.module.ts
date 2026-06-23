import { Module } from '@nestjs/common';
import { OperatoriController } from './operatori.controller';
import { OperatoriService } from './operatori.service';
@Module({ controllers: [OperatoriController], providers: [OperatoriService] })
export class OperatoriModule {}
