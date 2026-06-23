import { Module } from '@nestjs/common';
import { ArticoliController } from './articoli.controller';
import { ArticoliService } from './articoli.service';
@Module({ controllers: [ArticoliController], providers: [ArticoliService], exports: [ArticoliService] })
export class ArticoliModule {}
