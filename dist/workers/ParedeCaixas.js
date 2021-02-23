"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParedeCaixas = void 0;
const FileiraCaixas_1 = require("./FileiraCaixas");
const Objeto3D_1 = require("./Objeto3D");
class ParedeCaixas extends Objeto3D_1.Objeto3D {
    constructor(id, container, posicaoZ, fileiras = [], comprimentoX = 0, alturaY = 0, larguraZ = 0) {
        super(id, comprimentoX, alturaY, larguraZ);
        this.fileiras = [];
        this.id = id;
        this.container = container;
        this.posicaoZ = posicaoZ;
        this.fileiras = fileiras;
        this.calcularTamanho();
    }
    calcularTamanho() {
        this.comprimentoX = 0;
        this.alturaY = 0;
        this.larguraZ = 0;
        this.fileiras.forEach(fileira => {
            this.alturaY += fileira.alturaY;
            if (fileira.comprimentoX > this.comprimentoX)
                this.comprimentoX = fileira.comprimentoX;
            if (fileira.larguraZ > this.larguraZ)
                this.larguraZ = fileira.larguraZ;
        });
        return [this.comprimentoX, this.alturaY, this.larguraZ];
    }
    adicionarCaixa(caixa, container, paredeIndex) {
        if (this.fileiras.length < 1) {
            if (this.cabeFileiraComCaixa(caixa)) {
                this.fileiras.push(new FileiraCaixas_1.FileiraCaixas(0, this.container, 0, paredeIndex));
                const ultimaFileira = this.fileiras[this.fileiras.length - 1];
                const caixaAlocadaResult = ultimaFileira.adicionarCaixa(caixa, container, this.fileiras.length - 1, paredeIndex);
                if (caixaAlocadaResult.isAlocada()) {
                    caixa = caixaAlocadaResult;
                }
            }
        }
        else {
            const ultimaFileira = this.fileiras[this.fileiras.length - 1];
            if (!ultimaFileira.adicionarCaixa(caixa, container, this.fileiras.length - 1, paredeIndex).isAlocada()) {
                if (this.cabeFileiraComCaixa(caixa)) {
                    this.fileiras.push(new FileiraCaixas_1.FileiraCaixas(0, this.container, 0, paredeIndex));
                    // tslint:disable-next-line: no-shadowed-variable
                    const ultimaFileira = this.fileiras[this.fileiras.length - 1];
                    const caixaAlocadaResult = ultimaFileira.adicionarCaixa(caixa, container, this.fileiras.length - 1, paredeIndex);
                    if (caixaAlocadaResult.isAlocada()) {
                        caixa = caixaAlocadaResult;
                    }
                }
            }
        }
        return caixa;
    }
    cabeFileiraComCaixa(caixa) {
        const alturaLivre = this.obterAlturaLivre();
        return (alturaLivre > 0 && alturaLivre >= caixa.alturaY);
    }
    obterAlturaLivre() {
        var _a;
        const alturaLivre = ((_a = this.container) === null || _a === void 0 ? void 0 : _a.alturaY) - this.alturaY;
        if (alturaLivre < 0)
            return 0;
        return alturaLivre;
    }
}
exports.ParedeCaixas = ParedeCaixas;
//# sourceMappingURL=ParedeCaixas.js.map