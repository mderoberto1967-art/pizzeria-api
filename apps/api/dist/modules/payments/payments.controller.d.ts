export declare class PaymentsController {
    retry(orderId: string): {
        orderId: string;
        paymentIntentClientSecret: string;
        paymentStatus: string;
    };
    refund(paymentId: string, body: {
        amount?: number;
        reason?: string;
    }): {
        paymentId: string;
        amount: number | null;
        reason: string | null;
        status: string;
    };
}
