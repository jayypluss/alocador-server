"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
const Objeto3D_1 = require("./Objeto3D");
const ParedeCaixas_1 = require("./ParedeCaixas");
class Container extends Objeto3D_1.Objeto3D {
    constructor(id, comprimentoX, alturaY, larguraZ) {
        super(id, comprimentoX, alturaY, larguraZ);
        this.quantidadeCaixasAlocadas = 0;
        this.volumeAlocado = 0;
        this.caixasAlocadas = [];
        this.idsCaixasAlocadas = [];
        this.paredes = [];
    }
    alocar(caixa) {
        let caixaAlocada;
        if (this.paredes.length < 1) {
            this.paredes.push(new ParedeCaixas_1.ParedeCaixas(0, this, 0));
        }
        if (this.paredes.length > 0) {
            const parede = this.paredes[this.paredes.length - 1];
            caixaAlocada = parede.adicionarCaixa(caixa, this, this.paredes.length - 1);
        }
        if (!caixaAlocada.isAlocada()) {
            this.paredes.push(new ParedeCaixas_1.ParedeCaixas(this.paredes.length, this, this.paredes.length));
            const parede = this.paredes[this.paredes.length - 1];
            caixaAlocada = parede.adicionarCaixa(caixa, this, this.paredes.length - 1);
        }
        if (caixaAlocada.isAlocada()) {
            this.quantidadeCaixasAlocadas += 1;
            this.volumeAlocado += caixa.volume;
            this.caixasAlocadas.push(caixa);
            this.idsCaixasAlocadas.push(caixa.id);
            this.ultimaCaixaAlocada = caixa;
        }
        return caixaAlocada;
    }
}
exports.Container = Container;
//# sourceMappingURL=Container.js.map