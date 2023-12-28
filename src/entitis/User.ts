import { Account } from "./Account"

export class User {
  nome: string
  email: string
  private _senha: string
  conta: Account

  constructor(nome: string, email: string, senha: string) {
    this.nome = nome
    this.email = email
    this._senha = senha
    this.conta = new Account(this)
  }

  get depositos() {
    return this.conta.depositos
  }

  get emprestimos() {
    return this.conta.emprestimos
  }

  get transferencias() {
    return this.conta.transferencias
  }

  get saldo() {
    return this.conta.saldo
  }

  verificaSenha(senhaVerificacao: string) {
    return this._senha === senhaVerificacao
  }

  changePassword(emailVerificacao: string, senhaVerificacao: string, novaSenha: string) {
    if(emailVerificacao === this.email && this.verificaSenha(senhaVerificacao)) {
      this._senha = novaSenha
      console.log("Senha alterada")  
    }
  }
}

