import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ComunicazioniService } from './comunicazioni.service';

@Controller('comunicazioni')
export class ComunicazioniController {
  constructor(private readonly service: ComunicazioniService) {}
  @Get() findAll(@Query('letta') letta?: string) { return this.service.findAll(letta); }
  @Post() create(@Body() body: { mittente: string; testo: string }) { return this.service.create(body); }
  @Patch(':id/letta') marcaLetta(@Param('id') id: string) { return this.service.marcaLetta(id); }
  @Delete(':id') remove(@Param('id') id: string) { return this.service.remove(id); }
}
