import { Module } from '@nestjs/common';
import { OrdiniController } from './ordini.controller';
import { OrdiniService } from './ordini.service';
import { RealtimeModule } from '../realtime/realtime.module';
@Module({ imports: [RealtimeModule], controllers: [OrdiniController], providers: [OrdiniService], exports: [OrdiniService] })
export class OrdiniModule {}
