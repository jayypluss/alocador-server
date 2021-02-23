"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alocador = void 0;
class Alocador {
    constructor(container, gruposCaixas) {
        this.gruposCaixas = [];
        this.container = container;
        this.gruposCaixas = gruposCaixas;
    }
    alocarTodas(gruposCaixas, container) {
        this.gruposCaixas = this.organizarPorMaiorBase(gruposCaixas);
        let ultimaCaixaAlocada = null;
        let caixasListaFlat = [];
        this.gruposCaixas.forEach(grupo => {
            caixasListaFlat = caixasListaFlat.concat(grupo.caixas);
        });
        console.log('totalCaixa: ', caixasListaFlat.length);
        for (let index = 0; index < caixasListaFlat.length; index++) {
            ultimaCaixaAlocada = this.container.alocar(caixasListaFlat[index]);
            console.log('caixa alocada: ', ultimaCaixaAlocada === null || ultimaCaixaAlocada === void 0 ? void 0 : ultimaCaixaAlocada.posicao, " (", index + 1, ") ");
        }
        console.log('');
        console.log('Dados do container pós-alocação: ');
        console.log('container.caixasAlocadas.length', container.caixasAlocadas.length);
        console.log('container.quantidadeCaixasAlocadas', container.quantidadeCaixasAlocadas);
        console.log('container.volumeAlocado', container.volumeAlocado);
        return container;
    }
    organizarPorMaiorBase(gruposCaixas) {
        const compararBase = (grupoCaixas1, grupoCaixas2) => {
            if (grupoCaixas1.calcularBase() > grupoCaixas2.calcularBase()) {
                return -1;
            }
            if (grupoCaixas1.calcularBase() < grupoCaixas2.calcularBase()) {
                return 1;
            }
            return 0;
        };
        return gruposCaixas.sort(compararBase);
    }
}
exports.Alocador = Alocador;
//# sourceMappingURL=alocador.js.map