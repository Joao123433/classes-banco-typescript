"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const Account_1 = require("./Account");
class User {
    constructor(nome, email, senha) {
        this.nome = nome;
        this.email = email;
        this._senha = senha;
        this.conta = new Account_1.Account(this);
    }
    get depositos() {
        return this.conta.depositos;
    }
    get emprestimos() {
        return this.conta.emprestimos;
    }
    get transferencias() {
        return this.conta.transferencias;
    }
    get saldo() {
        return this.conta.saldo;
    }
    verificaSenha(senhaVerificacao) {
        return this._senha === senhaVerificacao;
    }
    changePassword(emailVerificacao, senhaVerificacao, novaSenha) {
        if (emailVerificacao === this.email && this.verificaSenha(senhaVerificacao)) {
            this._senha = novaSenha;
            console.log("Senha alterada");
        }
    }
}
exports.User = User;
