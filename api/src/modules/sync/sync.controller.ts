import { Body, Controller, Post } from '@nestjs/common';
import { SyncService } from './sync.service';

@Controller('sync')
export class SyncController {
  constructor(private readonly service: SyncService) {}
  @Post('seed') seed(@Body() body: { storeData: any; pizzeriaId?: string }) { return this.service.seed(body.storeData ?? {}, body.pizzeriaId); }
}
