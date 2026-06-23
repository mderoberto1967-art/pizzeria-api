import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { StampantiService } from './stampanti.service';

@Controller('categorie-stampanti')
export class CategorieStampantiController {
  constructor(private readonly service: StampantiService) {}
  @Get() findAll() { return this.service.findAllCategorie(); }
  @Post() create(@Body() body: any) { return this.service.createCategoria(body); }
  @Patch(':id') update(@Param('id') id: string, @Body() body: any) { return this.service.updateCategoria(id, body); }
  @Delete(':id') remove(@Param('id') id: string) { return this.service.removeCategoria(id); }
}

// Secondo controller per le stampanti stesse — verrà registrato separatamente
