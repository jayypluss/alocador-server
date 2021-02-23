"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Caixa = void 0;
const objeto_3d_1 = require("./objeto-3d");
const item_matriz_1 = require("./item-matriz");
class Caixa extends objeto_3d_1.Objeto3D {
    constructor(id, comprimentoX, alturaY, larguraZ) {
        super(id, comprimentoX, alturaY, larguraZ);
        this.volume = (comprimentoX * alturaY * larguraZ);
    }
    atribuirPosicao(x, y, z) {
        this.posicao = new item_matriz_1.ItemMatriz(x, y, z);
    }
    isAlocada() {
        var _a, _b, _c;
        if (((_a = this.posicao) === null || _a === void 0 ? void 0 : _a.x) >= 0)
            return true;
        if (((_b = this.posicao) === null || _b === void 0 ? void 0 : _b.y) >= 0)
            return true;
        if (((_c = this.posicao) === null || _c === void 0 ? void 0 : _c.z) >= 0)
            return true;
        else
            return false;
    }
}
exports.Caixa = Caixa;
//# sourceMappingURL=caixa.js.map