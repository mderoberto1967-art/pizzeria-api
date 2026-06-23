import { Body, Controller, Get, Patch } from '@nestjs/common';
import { ImpostazioniService } from './impostazioni.service';

@Controller('impostazioni')
export class ImpostazioniController {
  constructor(private readonly service: ImpostazioniService) {}
  @Get() findAll() { return this.service.findAll(); }
  @Patch() upsert(@Body() body: Record<string, unknown>) { return this.service.upsert(body); }
}
