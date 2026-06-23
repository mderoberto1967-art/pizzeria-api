export type FulfillmentType = 'pickup' | 'delivery' | 'table';
export type CheckoutItemDto = {
    menuItemId: string;
    quantity: number;
    variantId?: string;
    optionValueIds?: string[];
    notes?: string;
};
export declare class QuoteOrderDto {
    storeId: string;
    fulfillmentType: FulfillmentType;
    items: CheckoutItemDto[];
    addressId?: string;
    tableSessionId?: string;
}
export declare class CheckoutOrderDto extends QuoteOrderDto {
    paymentMethod: 'stripe';
}
export declare class UpdateOrderStatusDto {
    status: 'received' | 'in_preparation' | 'ready' | 'out_for_delivery' | 'delivered' | 'served' | 'cancelled';
    reason?: string;
}
