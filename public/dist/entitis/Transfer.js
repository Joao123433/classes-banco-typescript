"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transfer = void 0;
const Deposit_1 = require("./Deposit");
class Transfer extends Deposit_1.Deposit {
    constructor(usuarioEnviou, usuarioRecebeu, valor) {
        super(valor);
        this.usuarioEnviou = usuarioEnviou;
        this.usuarioRecebeu = usuarioRecebeu;
    }
}
exports.Transfer = Transfer;
