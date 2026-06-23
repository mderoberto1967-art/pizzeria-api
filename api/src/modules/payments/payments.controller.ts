import { Body, Controller, Param, Post } from '@nestjs/common';

@Controller()
export class PaymentsController {
  @Post('payments/:orderId/retry')
  retry(@Param('orderId') orderId: string) {
    return {
      orderId,
      paymentIntentClientSecret: 'pi_client_secret_retry_demo',
      paymentStatus: 'pending'
    };
  }

  @Post('admin/payments/:paymentId/refund')
  refund(
    @Param('paymentId') paymentId: string,
    @Body() body: { amount?: number; reason?: string }
  ) {
    return {
      paymentId,
      amount: body.amount ?? null,
      reason: body.reason ?? null,
      status: 'refund_requested'
    };
  }
}
