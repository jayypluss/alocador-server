"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alocador = void 0;
class Alocador {
    constructor(container, gruposCaixas) {
        this.gruposCaixas = [];
        this.container = container;
        this.gruposCaixas = gruposCaixas;
    }
    alocarTodas(container, gruposCaixas) {
        return __awaiter(this, void 0, void 0, function* () {
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
            return Promise.resolve(container);
        });
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