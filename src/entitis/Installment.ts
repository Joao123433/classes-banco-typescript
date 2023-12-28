export class Installment { // parcelas
  valorParcela: number
  numeroParcela: number
  situacao: string
  juros: string

  constructor(valorParcela: number, numeroParcela: number, situacao: string, juros: number) {
    this.valorParcela = valorParcela + (valorParcela * 15 / 100)
    this.numeroParcela = numeroParcela
    this.situacao = situacao
    this.juros = `${juros}%`
  }
}
