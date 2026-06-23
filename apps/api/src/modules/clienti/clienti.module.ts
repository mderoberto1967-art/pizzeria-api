import { Module } from '@nestjs/common';
import { ClientiController } from './clienti.controller';
import { ClientiService } from './clienti.service';
@Module({ controllers: [ClientiController], providers: [ClientiService] })
export class ClientiModule {}
