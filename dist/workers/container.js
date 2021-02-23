"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = void 0;
const objeto_3d_1 = require("./objeto-3d");
const parede_caixas_1 = require("./parede-caixas");
class Container extends objeto_3d_1.Objeto3D {
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
            this.paredes.push(new parede_caixas_1.ParedeCaixas(0, this, 0));
        }
        if (this.paredes.length > 0) {
            const parede = this.paredes[this.paredes.length - 1];
            caixaAlocada = parede.adicionarCaixa(caixa, this, this.paredes.length - 1);
        }
        if (!caixaAlocada.isAlocada()) {
            this.paredes.push(new parede_caixas_1.ParedeCaixas(this.paredes.length, this, this.paredes.length));
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
//# sourceMappingURL=container.js.map