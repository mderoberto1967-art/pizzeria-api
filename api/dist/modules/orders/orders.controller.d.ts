import { CheckoutOrderDto, QuoteOrderDto, UpdateOrderStatusDto } from './dto/checkout-order.dto';
export declare class OrdersController {
    quote(body: QuoteOrderDto): {
        storeId: string;
        fulfillmentType: import("./dto/checkout-order.dto").FulfillmentType;
        subtotal: number;
        deliveryFee: number;
        discounts: number;
        total: number;
        estimatedReadyTime: number;
        paymentModeAvailable: string[];
    };
    checkout(body: CheckoutOrderDto): {
        orderId: string;
        orderNumber: string;
        storeId: string;
        paymentIntentClientSecret: string;
        paymentStatus: string;
    };
    getOrder(orderId: string): {
        orderId: string;
        status: string;
    };
    getTracking(orderId: string): {
        orderId: string;
        status: string;
        timeline: {
            status: string;
            occurredAt: string;
        }[];
    };
    updateStatus(orderId: string, body: UpdateOrderStatusDto): {
        orderId: string;
        status: "received" | "in_preparation" | "ready" | "out_for_delivery" | "delivered" | "served" | "cancelled";
        reason: string | null;
        eventType: string;
    };
}
