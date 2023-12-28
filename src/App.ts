import { Deposit } from "./entitis/Deposit"
import { Transfer } from "./entitis/Transfer"
import { Loan } from "./entitis/Loan"
import { User } from "./entitis/User"

class App {
  private static _listaUsuario = []

  static get listaUsuario() {
    return App._listaUsuario
  }
  
  addNewUser(nome: string, email: string, senha: string) {
    const emailExist: string = App.findUser(email)
    if(!emailExist) {
      const user = new User(nome, email, senha)
      App._listaUsuario.push(user)
    }
  }

  static findUser(email: string) {
    return App._listaUsuario.find((e) => e.email === email)
  }

  static newDeposit(email: string, senha: string, valor: number) {
    const user: User = App.findUser(email)
    if(user) {
      const deposit = new Deposit(valor)
      user.conta.addDeposito(deposit, senha)
    }
  }

  static newInstallment(email: string, senha: string, valorEmprestimo: number, numerosParcelasEmprestimo: number) {
    const user: User = App.findUser(email)
    if(user) {
      const loan = new Loan(valorEmprestimo, numerosParcelasEmprestimo)
      user.conta.addEmprestimo(loan, senha)
    }
  }

  static newTransfer(usuarioEnviou: User, usuarioRecebeu: User, valor: number, email: string, senha: string) {
    const user: User = App.findUser(email)
    const transfer = new Transfer(usuarioEnviou, usuarioRecebeu, valor)
    user.conta.transfer(transfer, senha) 
  }

  changeTaxaJuros(novaTaxa: number) {
    Loan.taxaJuros = novaTaxa
  }
}

const app = new App()

app.addNewUser("joao", "joao@gmail.com", "12345")
app.addNewUser("Maria", "maria@gmail.com", "12345")

const usuarios: Array<User> = App.listaUsuario

const joao: User = App.listaUsuario[0]
const maria: User = App.listaUsuario[1]

console.log("--------------------------------------------")

App.newDeposit("joao@gmail.com", "12345", 1000)
App.newDeposit("maria@gmail.com", "12345", 1000)

App.newInstallment("joao@gmail.com", "12345", 1500, 7)
App.newTransfer(joao, maria, 150, "joao@gmail.com", "12345")


console.table(usuarios)


console.log("--------------------------------------------")


console.table({ 
  nome: joao.nome, 
  saldo: joao.saldo,
  depositos: joao.depositos, 
  emprestimos: joao.emprestimos, 
  transferencias: joao.transferencias 
})


console.log("--------------------------------------------")


console.table({ 
  nome: maria.nome, 
  saldo: maria.saldo,
  depositos: maria.depositos, 
  emprestimos: maria.emprestimos, 
  transferencias: maria.transferencias 
})
