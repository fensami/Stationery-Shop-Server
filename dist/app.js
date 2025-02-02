"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./app/routes"));
const cors_1 = __importDefault(require("cors"));
const globalErrorHandler_1 = __importDefault(require("./app/middlewares/globalErrorHandler"));
const app = (0, express_1.default)();
const cookie_parser_1 = __importDefault(require("cookie-parser"));
// Parsers
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
// app.use(cors());
app.use((0, cors_1.default)({ origin: 'https://stationery-shop-client-seven.vercel.app', credentials: true }));
// app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
// app.use(cors({ origin: '*', credentials: true }));
//Applications Routes 
app.use("/api", routes_1.default);
const test = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send({
        status: 200,
        message: "hello!! welcome to Stationery shop Server"
    });
});
app.get('/', test);
app.use(globalErrorHandler_1.default);
exports.default = app;
