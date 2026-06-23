"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersController = void 0;
const common_1 = require("@nestjs/common");
const checkout_order_dto_1 = require("./dto/checkout-order.dto");
let OrdersController = class OrdersController {
    quote(body) {
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
    checkout(body) {
        return {
            orderId: 'order_demo',
            orderNumber: 'A-001',
            storeId: body.storeId,
            paymentIntentClientSecret: 'pi_client_secret_demo',
            paymentStatus: 'pending'
        };
    }
    getOrder(orderId) {
        return {
            orderId,
            status: 'received'
        };
    }
    getTracking(orderId) {
        return {
            orderId,
            status: 'in_preparation',
            timeline: [
                { status: 'paid', occurredAt: new Date().toISOString() },
                { status: 'received', occurredAt: new Date().toISOString() }
            ]
        };
    }
    updateStatus(orderId, body) {
        return {
            orderId,
            status: body.status,
            reason: body.reason ?? null,
            eventType: 'order.status.updated'
        };
    }
};
exports.OrdersController = OrdersController;
__decorate([
    (0, common_1.Post)('orders/quote'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [checkout_order_dto_1.QuoteOrderDto]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "quote", null);
__decorate([
    (0, common_1.Post)('orders/checkout'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [checkout_order_dto_1.CheckoutOrderDto]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "checkout", null);
__decorate([
    (0, common_1.Get)('orders/:orderId'),
    __param(0, (0, common_1.Param)('orderId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "getOrder", null);
__decorate([
    (0, common_1.Get)('orders/:orderId/tracking'),
    __param(0, (0, common_1.Param)('orderId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "getTracking", null);
__decorate([
    (0, common_1.Patch)('admin/orders/:orderId/status'),
    __param(0, (0, common_1.Param)('orderId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, checkout_order_dto_1.UpdateOrderStatusDto]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "updateStatus", null);
exports.OrdersController = OrdersController = __decorate([
    (0, common_1.Controller)()
], OrdersController);
