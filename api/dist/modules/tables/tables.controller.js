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
exports.TablesController = void 0;
const common_1 = require("@nestjs/common");
let TablesController = class TablesController {
    getByQr(qrToken) {
        return {
            qrToken,
            storeId: 'store_demo',
            table: {
                id: 'table_demo',
                name: 'T1',
                seats: 4
            }
        };
    }
    createSession(body) {
        return {
            tableSessionId: 'table_session_demo',
            qrToken: body.qrToken,
            customerId: body.customerId ?? null,
            status: 'open'
        };
    }
    assignDelivery(orderId, body) {
        return {
            orderId,
            staffUserId: body.staffUserId,
            status: 'assigned'
        };
    }
};
exports.TablesController = TablesController;
__decorate([
    (0, common_1.Get)('public/table-session/:qrToken'),
    __param(0, (0, common_1.Param)('qrToken')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TablesController.prototype, "getByQr", null);
__decorate([
    (0, common_1.Post)('table-sessions'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TablesController.prototype, "createSession", null);
__decorate([
    (0, common_1.Post)('admin/orders/:orderId/assign-delivery'),
    __param(0, (0, common_1.Param)('orderId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], TablesController.prototype, "assignDelivery", null);
exports.TablesController = TablesController = __decorate([
    (0, common_1.Controller)()
], TablesController);
