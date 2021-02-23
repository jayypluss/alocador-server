"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const containerSchema = new mongoose_1.default.Schema({
    comprimentoX: {
        type: Number
    },
    alturaY: {
        type: Number
    },
    larguraZ: {
        type: Number
    },
    quantidade: {
        type: Number
    }
});
mongoose_1.default.model('Container', containerSchema);
//# sourceMappingURL=Container.js.map