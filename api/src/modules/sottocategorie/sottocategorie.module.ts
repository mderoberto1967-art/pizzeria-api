import { Module } from '@nestjs/common';
import { SottocategorieController } from './sottocategorie.controller';
import { SottocategorieService } from './sottocategorie.service';

@Module({ controllers: [SottocategorieController], providers: [SottocategorieService] })
export class SottocategorieModule {}
