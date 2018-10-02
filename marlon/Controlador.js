"use strict";
exports.__esModule = true;
var Cinema_1 = require("./Cinema");
var Cliente_1 = require("./Cliente");
var readline = require("readline-sync");
var Controlador = /** @class */ (function () {
    function Controlador() {
    }
    Controlador.prototype.comandos = function (cmd) {
        switch (cmd) {
            case "init": {
                var quantidade = readline.question("Quantidade de assentos da sala: ");
                this.cinema = new Cinema_1.Cinema(quantidade);
                break;
            }
            case "show": {
                this.cinema.show();
                break;
            }
            case "reservar": {
                var nome = readline.question("Informe o nome do cliente: ");
                var fone = readline.question("Informe o fone do cliente: ");
                var assento = readline.question("Informe o assento: ");
                var cliente = new Cliente_1.Cliente(nome, fone);
                this.cinema.reservar(cliente, assento);
                break;
            }
            case "cancelar": {
                var nome = readline.question("Informe o nome do cliente: ");
                this.cinema.cancelar(nome);
                break;
            }
            default: {
                console.log("failure: comando invalido");
                break;
            }
        }
    };
    Controlador.prototype.executar = function () {
        while (true) {
            this.opcoes();
            var cmd = readline.question("Informe o comando: ");
            if (cmd != "end") {
                this.comandos(cmd);
            }
            else {
                return;
            }
        }
    };
    Controlador.prototype.opcoes = function () {
        console.log("\n");
        console.log("init - inicializa uma nova sala");
        console.log("show - mostrar sala");
        console.log("reservar - faz reserva para cliente");
        console.log("cancelar - cancela reserva do cliente");
        console.log("end - sair do programa");
        console.log("\n");
    };
    return Controlador;
}());
exports.Controlador = Controlador;
