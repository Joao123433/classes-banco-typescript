"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deposit = void 0;
class Deposit {
    constructor(valor) {
        this.valor = valor;
        this.dataCriacao = new Date();
        this.valido = true;
    }
}
exports.Deposit = Deposit;
