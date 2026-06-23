import { Module } from '@nestjs/common';
import { CategorieStampantiController } from './stampanti.controller';
import { StampantiController } from './stampanti2.controller';
import { StampantiService } from './stampanti.service';
@Module({ controllers: [CategorieStampantiController, StampantiController], providers: [StampantiService] })
export class StampantiModule {}
