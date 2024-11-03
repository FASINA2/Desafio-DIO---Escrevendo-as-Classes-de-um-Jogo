class Clase {

    constructor(nome, arma){
        this.nome = nome;
        this.arma = arma;
    }

}

let guerreiro = new Clase("Guerreiro", "Espada");
let mago = new Clase("Mago", "Magia");
let monge = new Clase("Monge", "Artes Marciais");
let ninja = new Clase("Ninja", "Shuriken");

let clases = [guerreiro, mago, monge, ninja];

class Hero {

    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    attack(){
        console.log(`o ${clases[this.tipo].nome} atacou usando ${clases[this.tipo].arma}`);
    }
}

const meuHeroi = new Hero("Carlos", 22, 0);

meuHeroi.attack();
