import { Deposit } from "./Deposit"
import { User } from "./User"

export class Transfer extends Deposit {
  usuarioEnviou: User
  usuarioRecebeu: User
  valor: number

  constructor(usuarioEnviou: User, usuarioRecebeu: User, valor: number) {
    super(valor)
    this.usuarioEnviou = usuarioEnviou
    this.usuarioRecebeu = usuarioRecebeu
  }
}
