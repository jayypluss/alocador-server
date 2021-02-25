import { Caixa } from "./caixa";
import { Container } from "./container";
import { GrupoCaixas } from "./grupo-caixas";

export class Alocador {
    container: Container;
    gruposCaixas: GrupoCaixas[] = [];
    totalDeCaixasParaAlocar: number;

    constructor(container: Container, gruposCaixas: GrupoCaixas[]) {
        this.container = container;
        this.gruposCaixas = gruposCaixas;
    }

    public async alocarTodas(container: Container, gruposCaixas: GrupoCaixas[], ): Promise<Container> {
        this.gruposCaixas = this.organizarPorMaiorBase(gruposCaixas);

        let ultimaCaixaAlocada: Caixa = null;

        let caixasListaFlat: Caixa[] = [];

        this.gruposCaixas.forEach(grupo => {
            caixasListaFlat = caixasListaFlat.concat(grupo.caixas);
        });


        // tslint:disable-next-line: prefer-for-of
        for (let index = 0; index < caixasListaFlat.length; index++) {
            ultimaCaixaAlocada = this.container.alocar(caixasListaFlat[index]);
        }

        return Promise.resolve(container);
    }

    private organizarPorMaiorBase(gruposCaixas: GrupoCaixas[]) {
        const compararBase = (grupoCaixas1: GrupoCaixas, grupoCaixas2: GrupoCaixas) => {
            if (grupoCaixas1.calcularBase() > grupoCaixas2.calcularBase()) { return -1; }
            if (grupoCaixas1.calcularBase() < grupoCaixas2.calcularBase()) { return 1; }
            return 0;
        }
        return gruposCaixas.sort(compararBase);
    }

}


