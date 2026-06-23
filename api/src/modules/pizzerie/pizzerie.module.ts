import { Module } from '@nestjs/common';
import { PizzerieController } from './pizzerie.controller';
import { PizzerieService } from './pizzerie.service';

@Module({
  controllers: [PizzerieController],
  providers: [PizzerieService],
  exports: [PizzerieService],
})
export class PizzerieModule {}
