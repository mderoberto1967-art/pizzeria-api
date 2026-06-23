import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { SaleService } from './sale.service';

@Controller('tavoli')
export class TavoliController {
  constructor(private readonly service: SaleService) {}
  @Get() findAll(@Query('salaId') salaId?: string) { return this.service.findAllTavoli(salaId); }
  @Post() create(@Body() body: any) { return this.service.createTavolo(body); }
  @Patch(':id') update(@Param('id') id: string, @Body() body: any) { return this.service.updateTavolo(id, body); }
  @Patch(':id/stato') setStato(@Param('id') id: string, @Body() body: { stato: string }) { return this.service.setStatoTavolo(id, body.stato); }
  @Delete(':id') remove(@Param('id') id: string) { return this.service.removeTavolo(id); }
}
