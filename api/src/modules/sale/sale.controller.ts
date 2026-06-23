import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { SaleService } from './sale.service';

@Controller('sale')
export class SaleController {
  constructor(private readonly service: SaleService) {}
  @Get() findAll() { return this.service.findAllSale(); }
  @Post() create(@Body() body: any) { return this.service.createSala(body); }
  @Patch(':id') update(@Param('id') id: string, @Body() body: any) { return this.service.updateSala(id, body); }
  @Delete(':id') remove(@Param('id') id: string) { return this.service.removeSala(id); }

  @Get('tavoli')
  findTavoli() { return this.service.findAllTavoli(); }
  @Post('tavoli')
  createTavolo(@Body() body: any) { return this.service.createTavolo(body); }
  @Patch('tavoli/:id')
  updateTavolo(@Param('id') id: string, @Body() body: any) { return this.service.updateTavolo(id, body); }
  @Patch('tavoli/:id/stato')
  setStatoTavolo(@Param('id') id: string, @Body() body: { stato: string }) { return this.service.setStatoTavolo(id, body.stato); }
  @Post('tavoli/:id/preconto')
  richiediPreconto(@Param('id') id: string, @Body() body: { totale?: number }) { return this.service.richiediPreconto(id, body); }
  @Delete('tavoli/:id')
  removeTavolo(@Param('id') id: string) { return this.service.removeTavolo(id); }
}
