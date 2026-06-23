import { Controller, Get, Post, Patch, Delete, Body, Param, Query } from '@nestjs/common';
import { PizzerieService } from './pizzerie.service';

@Controller('pizzerie')
export class PizzerieController {
  constructor(private readonly service: PizzerieService) {}

  @Get()
  findAll() { return this.service.findAll(); }

  @Get(':id/sync-config')
  syncConfig(@Param('id') id: string) { return this.service.syncConfig(id); }

  @Get(':id')
  findById(@Param('id') id: string) { return this.service.findById(id); }

  @Get('codice/:codice')
  findByCodice(@Param('codice') codice: string) { return this.service.findByCodice(codice); }

  @Post()
  create(@Body() data: any) { return this.service.create(data); }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: any) { return this.service.update(id, data); }

  @Patch(':id/blocco')
  toggleBlocco(@Param('id') id: string) { return this.service.toggleBlocco(id); }

  @Patch(':id/attiva')
  toggleAttiva(@Param('id') id: string) { return this.service.toggleAttiva(id); }

  @Delete(':id')
  remove(@Param('id') id: string) { return this.service.remove(id); }
}
