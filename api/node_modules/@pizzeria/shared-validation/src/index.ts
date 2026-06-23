import { z } from 'zod';

export const checkoutItemSchema = z.object({
  menuItemId: z.string().min(1),
  quantity: z.number().int().positive(),
  variantId: z.string().min(1).optional(),
  optionValueIds: z.array(z.string().min(1)).optional(),
  notes: z.string().max(300).optional()
});

export const quoteOrderSchema = z.object({
  storeId: z.string().uuid().or(z.string().min(1)),
  fulfillmentType: z.enum(['pickup', 'delivery', 'table']),
  items: z.array(checkoutItemSchema).min(1),
  addressId: z.string().optional(),
  tableSessionId: z.string().optional()
});

export const checkoutOrderSchema = quoteOrderSchema.extend({
  paymentMethod: z.literal('stripe')
});

export const updateOrderStatusSchema = z.object({
  status: z.enum([
    'received',
    'in_preparation',
    'ready',
    'out_for_delivery',
    'delivered',
    'served',
    'cancelled'
  ]),
  reason: z.string().max(250).optional()
});
