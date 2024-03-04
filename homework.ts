function multiplyNumber(first: number, second: number):number {
    return first * second;
}

class Fulaninho {
    nome: string;

    constructor(nome: string){
        this.nome = nome;
    }

    dizSalve(dizSalve:string): string {
        return (dizSalve + `Salveee ${this.nome}!`)
    }
}

