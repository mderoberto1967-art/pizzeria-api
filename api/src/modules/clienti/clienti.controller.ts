import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ClientiService } from './clienti.service';

@Controller('clienti')
export class ClientiController {
  constructor(private readonly service: ClientiService) {}
  @Get() findAll(@Query('q') q?: string) { return this.service.findAll(q); }
  @Post() create(@Body() body: any) { return this.service.create(body); }
  @Patch(':id') update(@Param('id') id: string, @Body() body: any) { return this.service.update(id, body); }
  @Delete(':id') remove(@Param('id') id: string) { return this.service.remove(id); }
}
