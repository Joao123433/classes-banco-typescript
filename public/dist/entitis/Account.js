"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
class Account {
    constructor(donoConta) {
        this._saldo = 0;
        this.depositos = [];
        this.emprestimos = [];
        this.transferencias = [];
        this.donoConta = donoConta;
    }
    get saldo() {
        return this._saldo;
    }
    addDeposito(deposit, senha) {
        if (this.donoConta.verificaSenha(senha)) {
            this._saldo += deposit.valor;
            this.depositos.push(deposit);
        }
        else {
            console.log("Senha Invalida");
        }
    }
    addEmprestimo(loan, senha) {
        if (this.donoConta.verificaSenha(senha)) {
            this._saldo += loan.valor;
            this.emprestimos.push(loan);
        }
        else {
            console.log("Senha Invalida");
        }
    }
    transfer(transfer, senha) {
        if (this.donoConta.verificaSenha(senha)) {
            if (transfer.usuarioRecebeu === this.donoConta) {
                this._saldo += transfer.valor;
                this.transferencias.push(transfer);
            }
            else {
                this._saldo -= transfer.valor;
                this.transferencias.push(transfer);
            }
        }
        else {
            console.log("Senha Invalida");
        }
    }
}
exports.Account = Account;
