"use strict";
exports.__esModule = true;
var Cinema = /** @class */ (function () {
    function Cinema(qtd) {
        this.clientes = new Array();
        for (var i = 0; i < qtd; i++) {
            this.clientes.push(null);
        }
    }
    Cinema.prototype.reservar = function (cliente, assento) {
        for (var i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i] != null) {
                if (this.clientes[i].getId() == cliente.getId()) {
                    console.log("failure: ja existe um cliente com esse nome");
                    return;
                }
            }
        }
        if (this.clientes[assento - 1] == null) {
            this.clientes[assento - 1] = cliente;
        }
        else {
            console.log("failure: cadeira ja esta ocupada");
        }
    };
    Cinema.prototype.cancelar = function (cliente) {
        for (var i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i] != null) {
                if (this.clientes[i].getId() == cliente) {
                    this.clientes[i] = null;
                    return;
                }
            }
        }
        console.log("failure: cliente nao esta no cinema");
    };
    Cinema.prototype.show = function () {
        var res = "[ ";
        for (var i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i] == null) {
                res += "- ";
            }
            else {
                res += this.clientes[i].toString() + " ";
            }
        }
        res += "]";
        console.log(res);
    };
    return Cinema;
}());
exports.Cinema = Cinema;
