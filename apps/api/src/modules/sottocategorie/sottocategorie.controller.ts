import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { SottocategorieService } from './sottocategorie.service';

@Controller('sottocategorie')
export class SottocategorieController {
  constructor(private readonly service: SottocategorieService) {}

  @Get() findAll(@Query('categoriaId') categoriaId?: string) { return this.service.findAll(categoriaId); }
  @Post() create(@Body() body: any) { return this.service.create(body); }
  @Patch(':id') update(@Param('id') id: string, @Body() body: any) { return this.service.update(id, body); }
  @Delete(':id') remove(@Param('id') id: string) { return this.service.remove(id); }
}
