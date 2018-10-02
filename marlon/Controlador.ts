import { Cinema } from './Cinema';
import { Cliente } from './Cliente';

declare function require(msg: string): any;
var readline = require("readline-sync");

export class Controlador {
    private cinema : Cinema;

    public comandos(cmd : string): void {

        switch (cmd) {
            case "init" : {
                let quantidade : number = readline.question("Quantidade de assentos da sala: ");
                this.cinema = new Cinema(quantidade)
                break;
            }

            case "show" : {
                this.cinema.show();
                break;
            }

            case "reservar" : {
                let nome : string = readline.question("Informe o nome do cliente: ");
                let fone : string = readline.question("Informe o fone do cliente: ");
                let assento :number = readline.question("Informe o assento: ");
                let cliente = new Cliente(nome, fone);
                this.cinema.reservar(cliente, assento);
                break;
            }

            case "cancelar" : {
                let nome : string = readline.question("Informe o nome do cliente: ");
                this.cinema.cancelar(nome);
                break;
            }
        
            default: {
                console.log("failure: comando invalido");
                break;
            }
        }

    }


    public executar() : void {
        
        while(true){
            this.opcoes();
            let cmd: string = readline.question("Informe o comando: ");
            if (cmd != "end"){
                this.comandos(cmd);
            } else{
                return;
            }

        }

    }


    public opcoes () : void{
        console.log("\n");
        console.log("init - inicializa uma nova sala")
        console.log("show - mostrar sala")
        console.log("reservar - faz reserva para cliente")
        console.log("cancelar - cancela reserva do cliente")
        console.log("end - sair do programa")
        console.log("\n");
    }

}