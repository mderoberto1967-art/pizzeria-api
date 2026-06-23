import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ListiniService } from './listini.service';

@Controller('listini')
export class ListiniController {
  constructor(private readonly service: ListiniService) {}
  @Get() findAll() { return this.service.findAll(); }
  @Post() create(@Body() body: any) { return this.service.create(body); }
  @Patch(':id') update(@Param('id') id: string, @Body() body: any) { return this.service.update(id, body); }
  @Post(':id/attiva') attiva(@Param('id') id: string) { return this.service.attiva(id); }
  @Delete(':id') remove(@Param('id') id: string) { return this.service.remove(id); }
}
