export declare class TablesController {
    getByQr(qrToken: string): {
        qrToken: string;
        storeId: string;
        table: {
            id: string;
            name: string;
            seats: number;
        };
    };
    createSession(body: {
        qrToken: string;
        customerId?: string;
    }): {
        tableSessionId: string;
        qrToken: string;
        customerId: string | null;
        status: string;
    };
    assignDelivery(orderId: string, body: {
        staffUserId: string;
    }): {
        orderId: string;
        staffUserId: string;
        status: string;
    };
}
