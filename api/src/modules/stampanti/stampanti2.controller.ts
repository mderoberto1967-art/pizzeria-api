import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { StampantiService } from './stampanti.service';

@Controller('stampanti')
export class StampantiController {
  constructor(private readonly service: StampantiService) {}
  @Get() findAll() { return this.service.findAll(); }
  @Post() create(@Body() body: any) { return this.service.create(body); }
  @Patch(':id') update(@Param('id') id: string, @Body() body: any) { return this.service.update(id, body); }
  @Delete(':id') remove(@Param('id') id: string) { return this.service.remove(id); }
}
