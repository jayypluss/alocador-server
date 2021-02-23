import { Objeto3D } from './objeto-3d';
import { Caixa } from './caixa';
import { ParedeCaixas } from './parede-caixas';

export class Container extends Objeto3D {
    id: number;
    quantidadeCaixasAlocadas: number = 0;
    volumeAlocado: number = 0;
    caixasAlocadas: Caixa[] = [];
    idsCaixasAlocadas: number[] = [];
    paredes: ParedeCaixas[] = [];
    ultimaCaixaAlocada: Caixa;

    constructor(id: number, comprimentoX: number, alturaY: number, larguraZ: number) {
        super(id, comprimentoX, alturaY, larguraZ);
    }

    alocar(caixa: Caixa): Caixa {
        let caixaAlocada: Caixa;

        if (this.paredes.length < 1) {
            this.paredes.push(new ParedeCaixas(0, this, 0));
        }

        if (this.paredes.length > 0) {
            const parede = this.paredes[this.paredes.length-1];
            caixaAlocada = parede.adicionarCaixa(caixa, this, this.paredes.length-1);
        }

        if (!caixaAlocada.isAlocada()) {
            this.paredes.push(new ParedeCaixas(this.paredes.length, this, this.paredes.length));
            const parede = this.paredes[this.paredes.length-1];
            caixaAlocada = parede.adicionarCaixa(caixa, this, this.paredes.length-1);
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
