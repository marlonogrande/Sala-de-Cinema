import {Cliente} from "./Cliente";

export class Cinema{
    private clientes ;


    public constructor (qtd : number){
        this.clientes = new Array<Cliente>();
        for (let i = 0; i <qtd; i++) {
            this.clientes.push(null);
            
        }
    }

    public reservar(cliente : Cliente, assento : number) : void{

        for (let i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i] != null){
                if (this.clientes[i].getId() == cliente.getId()){
                    console.log("failure: ja existe um cliente com esse nome");
                    return;
                }
            }
        }

            if(this.clientes[assento-1] == null){
                this.clientes[assento-1] = cliente;
            } else{
                console.log("failure: cadeira ja esta ocupada");
            }
    }

    public cancelar(cliente : string) : void{
        for (let i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i] != null){
                if (this.clientes[i].getId() == cliente){
                    this.clientes[i] = null;
                    return;
                }
            }
        }
        console.log("failure: cliente nao esta no cinema");
    }



    public show() : void{
        let res : string = "[ ";

        for (let i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i] == null){
                res += "- ";
            } else{
                res += this.clientes[i].toString() + " ";
            }
        }

        res += "]";

        console.log(res);
    }
}