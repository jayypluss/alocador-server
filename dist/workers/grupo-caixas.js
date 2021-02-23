"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrupoCaixas = void 0;
const caixa_1 = require("./caixa");
class GrupoCaixas {
    constructor(id, caixas = []) {
        this.caixas = [];
        this.id = id;
        this.caixas = caixas;
    }
    criarCaixas(comprimentoX, alturaY, larguraZ, quantidade = 0) {
        if (quantidade > 0) {
            for (let index = 0; index < quantidade; index++) {
                this.caixas.push(new caixa_1.Caixa(index, comprimentoX, alturaY, larguraZ));
            }
        }
        return this.caixas;
    }
    calcularBase() {
        if (this.caixas.length > 0) {
            return this.caixas[0].comprimentoX * this.caixas[0].larguraZ;
        }
    }
    quantidadeCaixas() {
        return this.caixas.length;
    }
}
exports.GrupoCaixas = GrupoCaixas;
//# sourceMappingURL=grupo-caixas.js.map