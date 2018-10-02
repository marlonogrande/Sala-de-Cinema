"use strict";
exports.__esModule = true;
var Cliente = /** @class */ (function () {
    function Cliente(id, telefone) {
        this.id = id;
        this.telefone = telefone;
    }
    Cliente.prototype.getId = function () {
        return this.id;
    };
    Cliente.prototype.setId = function (id) {
        this.id = id;
    };
    Cliente.prototype.getTelefone = function () {
        return this.telefone;
    };
    Cliente.prototype.setTelefone = function (telefone) {
        this.telefone = telefone;
    };
    Cliente.prototype.toString = function () {
        return this.id + ":" + this.telefone;
    };
    return Cliente;
}());
exports.Cliente = Cliente;
