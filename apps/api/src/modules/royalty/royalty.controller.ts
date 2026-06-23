import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { RoyaltyService } from './royalty.service';

@Controller('royalty')
export class RoyaltyController {
  constructor(private readonly service: RoyaltyService) {}
  @Get() findAll(@Query('periodo') periodo?: string) { return this.service.findAll(periodo); }
  @Post() create(@Body() body: any) { return this.service.create(body); }
  @Patch(':id') update(@Param('id') id: string, @Body() body: any) { return this.service.update(id, body); }
}
