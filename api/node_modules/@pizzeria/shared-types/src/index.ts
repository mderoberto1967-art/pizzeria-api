export type FulfillmentType = 'pickup' | 'delivery' | 'table';

export type OrderStatus =
  | 'draft'
  | 'pending_payment'
  | 'paid'
  | 'received'
  | 'in_preparation'
  | 'ready'
  | 'out_for_delivery'
  | 'delivered'
  | 'served'
  | 'cancelled'
  | 'refunded';

export type PaymentStatus =
  | 'unpaid'
  | 'requires_action'
  | 'authorized'
  | 'paid'
  | 'partially_refunded'
  | 'refunded'
  | 'failed';

export type MenuItem = {
  id: string;
  storeId: string;
  categoryId: string;
  name: string;
  description?: string;
  basePrice: number;
  isAvailable: boolean;
};

export type OrderItem = {
  menuItemId: string;
  quantity: number;
  unitPrice: number;
  notes?: string;
};

export type Order = {
  id: string;
  storeId: string;
  orderNumber: string;
  fulfillmentType: FulfillmentType;
  status: OrderStatus;
  paymentStatus: PaymentStatus;
  totalAmount: number;
  items: OrderItem[];
};

export type RealtimeEvent<TPayload = Record<string, unknown>> = {
  eventId: string;
  eventType: string;
  occurredAt: string;
  storeId: string;
  orderId?: string;
  payload: TPayload;
};
