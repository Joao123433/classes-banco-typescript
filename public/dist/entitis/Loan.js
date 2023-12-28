"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loan = void 0;
const Deposit_1 = require("./Deposit");
const Installment_1 = require("./Installment");
class Loan extends Deposit_1.Deposit {
    constructor(valorEmprestimo, numerosParcelasEmprestimo) {
        super(valorEmprestimo);
        this.numerosParcelasEmprestimo = [];
        this.calcParcelas(numerosParcelasEmprestimo);
    }
    calcParcelas(numerosParcelas) {
        for (let i = 1; i <= numerosParcelas; i++) {
            const parcelasIndividuais = this.valor / numerosParcelas;
            this.numerosParcelasEmprestimo.push(new Installment_1.Installment(parcelasIndividuais, i, "pendente", Loan.taxaJuros));
        }
    }
    static get taxaJuros() {
        return Loan._taxaJuros;
    }
    static set taxaJuros(juros) {
        Loan._taxaJuros = juros;
    }
}
exports.Loan = Loan;
Loan._taxaJuros = 15;
