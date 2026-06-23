import { Module } from '@nestjs/common';
import { ListiniController } from './listini.controller';
import { ListiniService } from './listini.service';
@Module({ controllers: [ListiniController], providers: [ListiniService] })
export class ListiniModule {}
