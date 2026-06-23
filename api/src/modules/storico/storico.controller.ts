import { Controller, Get, Query } from '@nestjs/common';
import { StoricoService } from './storico.service';

@Controller('storico')
export class StoricoController {
  constructor(private readonly service: StoricoService) {}
  @Get() findAll(@Query('da') da?: string, @Query('a') a?: string, @Query('articoloId') articoloId?: string) { return this.service.findAll(da, a, articoloId); }
  @Get('riepilogo') riepilogo(@Query('periodo') periodo?: string) { return this.service.riepilogo(periodo); }
  @Get('pizzerie') pizzerie(@Query('da') da?: string, @Query('a') a?: string) { return this.service.perPizzeria(da, a); }
  @Get('pagamenti') pagamenti(@Query('da') da?: string, @Query('a') a?: string) { return this.service.perMetodoPagamento(da, a); }
}
