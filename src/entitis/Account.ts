import { Deposit } from "./Deposit"
import { Loan } from "./Loan"
import { Transfer } from "./Transfer"
import { User } from "./User"

export class Account {
  private _saldo: number
  depositos: Array<Deposit>
  emprestimos: Array<Loan>
  transferencias: Array<Transfer>
  donoConta: User

  constructor(donoConta: User) {
    this._saldo = 0 
    this.depositos = []
    this.emprestimos = []
    this.transferencias = []
    this.donoConta = donoConta
  }

  get saldo() {
    return this._saldo
  }

  addDeposito(deposit: Deposit, senha: string) {
    if(this.donoConta.verificaSenha(senha)) {
      this._saldo += deposit.valor
      this.depositos.push(deposit)
    } else {
      console.log("Senha Invalida")
    }
  }

  addEmprestimo(loan: Loan, senha: string) {
    if(this.donoConta.verificaSenha(senha)) {
      this._saldo += loan.valor
      this.emprestimos.push(loan)
    } else {
      console.log("Senha Invalida")
    }
  }

  transfer(transfer: Transfer, senha: string) {
    if(this.donoConta.verificaSenha(senha)) {
      if(transfer.usuarioRecebeu === this.donoConta) {
        this._saldo += transfer.valor
        this.transferencias.push(transfer)
      } else {
        this._saldo -= transfer.valor
        this.transferencias.push(transfer)
      }
    } else {
      console.log("Senha Invalida")
    }
  }
}
