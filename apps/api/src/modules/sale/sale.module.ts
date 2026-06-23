import { Module } from '@nestjs/common';
import { SaleController } from './sale.controller';
import { TavoliController } from './tavoli.controller';
import { SaleService } from './sale.service';
@Module({ controllers: [SaleController, TavoliController], providers: [SaleService], exports: [SaleService] })
export class SaleModule {}
