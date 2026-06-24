import { Controller, Get } from '@nestjs/common';

@Controller()
export class HealthController {
  @Get()
  health() {
    return { status: 'ok', service: 'Risto Galaxy API' };
  }

  @Get('health')
  healthPublic() {
    return { status: 'ok', service: 'Risto Galaxy API', public: true };
  }
}
