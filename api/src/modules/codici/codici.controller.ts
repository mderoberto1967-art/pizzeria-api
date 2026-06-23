import { Controller, Get, Post, Delete, Body, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { CodiciService } from './codici.service';
import { AttivaCodiceDto } from './dto/attiva-codice.dto';

@Controller('codici')
export class CodiciController {
  constructor(private readonly service: CodiciService) {}

  @Get()
  findAll() { return this.service.findAll(); }

  @Post()
  create(@Body() data: { tipo?: string; giorniValidita?: number; codice?: string }) {
    return this.service.create(data);
  }

  @Post('batch')
  createBatch(@Body() data: { count: number; tipo?: string; giorniValidita?: number }) {
    return this.service.createMany(data.count, data);
  }

  @Post('valida')
  validate(@Body('codice') codice: string) { return this.service.validate(codice); }

  @Post('attiva')
  @HttpCode(HttpStatus.OK)
  attiva(@Body() dto: AttivaCodiceDto) {
    return this.service.attiva(dto.codice, dto.nomePizzeria);
  }

  @Delete(':id')
  remove(@Param('id') id: string) { return this.service.remove(id); }
}
