export class Deposit {
  valor: number
  dataCriacao: Date
  valido: boolean

  constructor(valor: number) {
    this.valor = valor
    this.dataCriacao = new Date();
    this.valido = true
  }
}

