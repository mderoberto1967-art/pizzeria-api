import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CategorieService } from './categorie.service';

@Controller('categorie')
export class CategorieController {
  constructor(private readonly service: CategorieService) {}

  @Get() findAll() { return this.service.findAll(); }
  @Post() create(@Body() body: { nome: string; ordine?: number }) { return this.service.create(body); }
  @Patch(':id') update(@Param('id') id: string, @Body() body: any) { return this.service.update(id, body); }
  @Delete(':id') remove(@Param('id') id: string) { return this.service.remove(id); }
}
