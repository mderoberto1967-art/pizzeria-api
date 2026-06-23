export type FulfillmentType = 'pickup' | 'delivery' | 'table';

export type CheckoutItemDto = {
  menuItemId: string;
  quantity: number;
  variantId?: string;
  optionValueIds?: string[];
  notes?: string;
};

export class QuoteOrderDto {
  storeId!: string;
  fulfillmentType!: FulfillmentType;
  items!: CheckoutItemDto[];
  addressId?: string;
  tableSessionId?: string;
}

export class CheckoutOrderDto extends QuoteOrderDto {
  paymentMethod!: 'stripe';
}

export class UpdateOrderStatusDto {
  status!:
    | 'received'
    | 'in_preparation'
    | 'ready'
    | 'out_for_delivery'
    | 'delivered'
    | 'served'
    | 'cancelled';
  reason?: string;
}
