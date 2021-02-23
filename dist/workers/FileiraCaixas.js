"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileiraCaixas = void 0;
const Objeto3D_1 = require("./Objeto3D");
class FileiraCaixas extends Objeto3D_1.Objeto3D {
    constructor(id, container, posicaoY, posicaoZ, caixas = [], comprimentoX = 0, alturaY = 0, larguraZ = 0) {
        super(id, comprimentoX, alturaY, larguraZ);
        this.caixas = [];
        this.id = id;
        this.container = container;
        this.caixas = caixas;
        this.posicaoY = posicaoY;
        this.posicaoZ = posicaoZ;
        this.calcularTamanho();
    }
    atribuirContainer(container) {
        this.container = container;
    }
    atribuirPosicao(y, z) {
        this.alturaY = y;
        this.larguraZ = z;
    }
    calcularTamanho() {
        this.comprimentoX = 0;
        this.alturaY = 0;
        this.larguraZ = 0;
        this.caixas.forEach(caixa => {
            this.comprimentoX += caixa.comprimentoX;
            if (caixa.alturaY > this.alturaY)
                this.alturaY = caixa.alturaY;
            if (caixa.larguraZ > this.larguraZ)
                this.larguraZ = caixa.larguraZ;
        });
        return [this.comprimentoX, this.alturaY, this.larguraZ];
    }
    adicionarCaixa(caixa, container, fileiraIndex, paredeIndex) {
        if (this.cabeCaixa(caixa)) {
            caixa.atribuirPosicao(this.caixas.length, fileiraIndex, paredeIndex);
            caixa.container = container;
            this.caixas.push(caixa);
            this.calcularTamanho();
        }
        return caixa;
    }
    cabeCaixa(caixa) {
        const comprimentoLivre = this.obterComprimentoLivreX();
        const alturaLivre = this.obterAlturaLivreY();
        const larguraLivre = this.obterLarguraLivreZ();
        return (comprimentoLivre - caixa.comprimentoX >= 0)
            && (alturaLivre - caixa.alturaY >= 0)
            && (larguraLivre - caixa.larguraZ >= 0)
            ? true : false;
    }
    obterComprimentoLivreX() {
        return this.container.comprimentoX - this.comprimentoX;
    }
    obterAlturaLivreY() {
        return this.container.alturaY - this.alturaY;
    }
    obterLarguraLivreZ() {
        return this.container.larguraZ - this.larguraZ;
    }
}
exports.FileiraCaixas = FileiraCaixas;
//# sourceMappingURL=FileiraCaixas.js.map