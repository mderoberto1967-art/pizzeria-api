import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import {
  CheckoutOrderDto,
  QuoteOrderDto,
  UpdateOrderStatusDto
} from './dto/checkout-order.dto';

@Controller()
export class OrdersController {
  @Post('orders/quote')
  quote(@Body() body: QuoteOrderDto) {
    return {
      storeId: body.storeId,
      fulfillmentType: body.fulfillmentType,
      subtotal: 0,
      deliveryFee: body.fulfillmentType === 'delivery' ? 3.5 : 0,
      discounts: 0,
      total: body.fulfillmentType === 'delivery' ? 3.5 : 0,
      estimatedReadyTime: 20,
      paymentModeAvailable: ['stripe']
    };
  }

  @Post('orders/checkout')
  checkout(@Body() body: CheckoutOrderDto) {
    return {
      orderId: 'order_demo',
      orderNumber: 'A-001',
      storeId: body.storeId,
      paymentIntentClientSecret: 'pi_client_secret_demo',
      paymentStatus: 'pending'
    };
  }

  @Get('orders/:orderId')
  getOrder(@Param('orderId') orderId: string) {
    return {
      orderId,
      status: 'received'
    };
  }

  @Get('orders/:orderId/tracking')
  getTracking(@Param('orderId') orderId: string) {
    return {
      orderId,
      status: 'in_preparation',
      timeline: [
        { status: 'paid', occurredAt: new Date().toISOString() },
        { status: 'received', occurredAt: new Date().toISOString() }
      ]
    };
  }

  @Patch('admin/orders/:orderId/status')
  updateStatus(
    @Param('orderId') orderId: string,
    @Body() body: UpdateOrderStatusDto
  ) {
    return {
      orderId,
      status: body.status,
      reason: body.reason ?? null,
      eventType: 'order.status.updated'
    };
  }
}
