import { Module } from '@nestjs/common';
import { CodiciController } from './codici.controller';
import { CodiciService } from './codici.service';

@Module({
  controllers: [CodiciController],
  providers: [CodiciService],
  exports: [CodiciService],
})
export class CodiciModule {}
