import { Module } from '@nestjs/common';
import { IngredientiController } from './ingredienti.controller';
import { IngredientiService } from './ingredienti.service';
@Module({ controllers: [IngredientiController], providers: [IngredientiService] })
export class IngredientiModule {}
