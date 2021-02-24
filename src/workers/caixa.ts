import { Objeto3D } from "./objeto-3d";
import { ItemMatriz } from "./item-matriz";
import { Container } from "./container";

export class Caixa extends Objeto3D {
    id: number;
    idGrupoCaixas: number;
    volume: number;
    posicao: ItemMatriz;
    container: Container;

    constructor(id: number, comprimentoX: number, alturaY: number, larguraZ: number, idGrupoCaixa?: number) {
        super(id, comprimentoX, alturaY, larguraZ);
        this.volume = (comprimentoX * alturaY * larguraZ);
        this.idGrupoCaixas = idGrupoCaixa;
    }

    atribuirPosicao(x: number, y: number, z: number) {
        this.posicao = new ItemMatriz(x, y, z);
    }

    isAlocada() {
        if (this.posicao?.x >= 0) return true;
        if (this.posicao?.y >= 0) return true;
        if (this.posicao?.z >= 0) return true;
        else return false;
    }
}
