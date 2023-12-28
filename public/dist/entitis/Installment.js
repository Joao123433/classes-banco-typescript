"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Installment = void 0;
class Installment {
    constructor(valorParcela, numeroParcela, situacao, juros) {
        this.valorParcela = valorParcela + (valorParcela * 15 / 100);
        this.numeroParcela = numeroParcela;
        this.situacao = situacao;
        this.juros = `${juros}%`;
    }
}
exports.Installment = Installment;
