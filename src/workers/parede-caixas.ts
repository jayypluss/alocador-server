import { Caixa } from './caixa';
import { Container } from './container';
import { FileiraCaixas } from './fileira-caixas';
import { Objeto3D } from "./objeto-3d";

export class ParedeCaixas extends Objeto3D {
    id: number;
    fileiras: FileiraCaixas[] = [];
    posicaoZ: number;
    container: Container;

    constructor(id: number,
                container?: Container,
                posicaoZ?: number,
                fileiras: FileiraCaixas[] = [],
                comprimentoX: number = 0,
                alturaY: number = 0,
                larguraZ: number = 0) {

        super(id, comprimentoX, alturaY, larguraZ);
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
            if (fileira.comprimentoX > this.comprimentoX) this.comprimentoX = fileira.comprimentoX;
            if (fileira.larguraZ > this.larguraZ) this.larguraZ = fileira.larguraZ;
        });
        return [this.comprimentoX, this.alturaY, this.larguraZ];
    }


    adicionarCaixa(caixa: Caixa, container: Container, paredeIndex: number): Caixa {
        if (this.fileiras.length < 1) {
            if(this.cabeFileiraComCaixa(caixa)) {
                this.fileiras.push(new FileiraCaixas(0, this.container, 0, paredeIndex));
                const ultimaFileira = this.fileiras[this.fileiras.length-1];
                const caixaAlocadaResult = ultimaFileira.adicionarCaixa(caixa, container, this.fileiras.length-1, paredeIndex);
                if (caixaAlocadaResult.isAlocada()) {
                    caixa = caixaAlocadaResult;
                }
            }
        } else {
            const ultimaFileira = this.fileiras[this.fileiras.length-1];
            if (!ultimaFileira.adicionarCaixa(caixa, container, this.fileiras.length-1, paredeIndex).isAlocada()) {
                if(this.cabeFileiraComCaixa(caixa)) {
                    this.fileiras.push(new FileiraCaixas(0, this.container, 0, paredeIndex));
                    // tslint:disable-next-line: no-shadowed-variable
                    const ultimaFileira = this.fileiras[this.fileiras.length-1];
                    const caixaAlocadaResult = ultimaFileira.adicionarCaixa(caixa, container, this.fileiras.length-1, paredeIndex);
                    if (caixaAlocadaResult.isAlocada()) {
                        caixa = caixaAlocadaResult;
                    }
                }
            }
        }
        return caixa;
    }

    cabeFileiraComCaixa(caixa: Caixa): boolean {
        const alturaLivre = this.obterAlturaLivre();
        return (alturaLivre > 0 && alturaLivre >= caixa.alturaY);
    }

    obterAlturaLivre(): number {
        const alturaLivre = this.container?.alturaY - this.alturaY;
        if (alturaLivre < 0) return 0;
        return alturaLivre;
    }

}