import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ArticoliService } from './articoli.service';

@Controller('articoli')
export class ArticoliController {
  constructor(private readonly service: ArticoliService) {}
  @Get() findAll(@Query('categoriaId') cat?: string, @Query('disponibile') disp?: string) { return this.service.findAll(cat, disp); }
  @Post() create(@Body() body: any) { return this.service.create(body); }
  @Patch(':id') update(@Param('id') id: string, @Body() body: any) { return this.service.update(id, body); }
  @Patch(':id/disponibilita') setDisp(@Param('id') id: string, @Body() body: { disponibile: boolean }) { return this.service.setDisponibilita(id, body.disponibile); }
  @Delete(':id') remove(@Param('id') id: string) { return this.service.remove(id); }
}
