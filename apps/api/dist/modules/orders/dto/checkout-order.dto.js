"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOrderStatusDto = exports.CheckoutOrderDto = exports.QuoteOrderDto = void 0;
class QuoteOrderDto {
    storeId;
    fulfillmentType;
    items;
    addressId;
    tableSessionId;
}
exports.QuoteOrderDto = QuoteOrderDto;
class CheckoutOrderDto extends QuoteOrderDto {
    paymentMethod;
}
exports.CheckoutOrderDto = CheckoutOrderDto;
class UpdateOrderStatusDto {
    status;
    reason;
}
exports.UpdateOrderStatusDto = UpdateOrderStatusDto;
