"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.caixaSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.caixaSchema = new mongoose_1.default.Schema({
    comprimentoX: {
        type: Number
    },
    alturaY: {
        type: Number
    },
    larguraZ: {
        type: Number
    },
    volume: {
        type: Number
    },
    posicao: {
        type: Object
    },
    container: {
        type: mongoose_1.default.Types.ObjectId
    }
});
mongoose_1.default.model('Caixa', exports.caixaSchema);
//# sourceMappingURL=Caixa.js.map