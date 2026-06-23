import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { OrdiniService } from './ordini.service';

@Controller('ordini')
export class OrdiniController {
  constructor(private readonly service: OrdiniService) {}
  @Get() findAll(@Query('stato') stato?: string, @Query('data') data?: string) { return this.service.findAll(stato, data); }
  @Post() create(@Body() body: any) { return this.service.create(body); }
  @Get(':id') findOne(@Param('id') id: string) { return this.service.findOne(id); }
  @Patch(':id/stato') updateStato(@Param('id') id: string, @Body() body: { stato: string }) { return this.service.updateStato(id, body.stato); }
  @Delete(':id') remove(@Param('id') id: string) { return this.service.remove(id); }
}
