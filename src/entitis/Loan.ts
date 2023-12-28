import { Deposit } from "./Deposit"
import { Installment } from "./Installment"

export class Loan extends Deposit {
  private static _taxaJuros = 15
  valorEmprestimo: number
  numerosParcelasEmprestimo:  Array<Installment>

  constructor(valorEmprestimo: number, numerosParcelasEmprestimo: number) {
    super(valorEmprestimo)
    this.numerosParcelasEmprestimo = []
    this.calcParcelas(numerosParcelasEmprestimo)
  }

  calcParcelas(numerosParcelas: number) {
    for(let i = 1; i <= numerosParcelas; i++) {
      const parcelasIndividuais = this.valor / numerosParcelas
      this.numerosParcelasEmprestimo.push(new Installment(parcelasIndividuais, i, "pendente", Loan.taxaJuros))
    }
  }

  static get taxaJuros() {
    return Loan._taxaJuros
  }

  static set taxaJuros(juros) {
    Loan._taxaJuros = juros
  }
}

