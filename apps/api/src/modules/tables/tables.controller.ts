import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller()
export class TablesController {
  @Get('public/table-session/:qrToken')
  getByQr(@Param('qrToken') qrToken: string) {
    return {
      qrToken,
      storeId: 'store_demo',
      table: {
        id: 'table_demo',
        name: 'T1',
        seats: 4
      }
    };
  }

  @Post('table-sessions')
  createSession(@Body() body: { qrToken: string; customerId?: string }) {
    return {
      tableSessionId: 'table_session_demo',
      qrToken: body.qrToken,
      customerId: body.customerId ?? null,
      status: 'open'
    };
  }

  @Post('admin/orders/:orderId/assign-delivery')
  assignDelivery(
    @Param('orderId') orderId: string,
    @Body() body: { staffUserId: string }
  ) {
    return {
      orderId,
      staffUserId: body.staffUserId,
      status: 'assigned'
    };
  }
}
