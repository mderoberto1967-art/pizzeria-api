import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { IngredientiService } from './ingredienti.service';

@Controller('ingredienti')
export class IngredientiController {
  constructor(private readonly service: IngredientiService) {}
  @Get() findAll() { return this.service.findAll(); }
  @Post() create(@Body() body: any) { return this.service.create(body); }
  @Patch(':id') update(@Param('id') id: string, @Body() body: any) { return this.service.update(id, body); }
  @Delete(':id') remove(@Param('id') id: string) { return this.service.remove(id); }
}
