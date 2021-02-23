"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// declare interface IContainer extends Document {
//     comprimentoX: number;
//     alturaY: number;
//     larguraZ?: number;
//     quantidade?: number;
// }
// export interface ContainerModel extends Model<IContainer> {};
const grupoCaixasSchema = new mongoose_1.default.Schema({
    comprimentoX: {
        type: Number
    },
    alturaY: {
        type: Number
    },
    larguraZ: {
        type: Number
    },
    quantidadeCaixas: {
        type: Number
    }
});
mongoose_1.default.model('GrupoCaixas', grupoCaixasSchema);
//# sourceMappingURL=GrupoCaixas.js.map