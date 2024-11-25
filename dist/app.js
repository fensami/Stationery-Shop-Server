"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const stationeryProducts_route_1 = __importDefault(require("./app/modules/Stationery-Product/stationeryProducts.route"));
const orderProducts_route_1 = __importDefault(require("./app/modules/Stationery-Order/orderProducts.route"));
const app = (0, express_1.default)();
// Middleware
app.use(express_1.default.json());
//Post :  /api/product/create-product
app.use('/api/', stationeryProducts_route_1.default);
app.use('/api/order', orderProducts_route_1.default);
app.get('/', (req, res) => {
    res.send({
        status: 200,
        message: 'hello!! welcome to Stationery shop',
    });
});
exports.default = app;
