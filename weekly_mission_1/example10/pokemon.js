export class MyPokemon{
    constructor(name){
        this.name = name;
    }
}

export default function sayHello() {
    console.log(`Mi pokemón [${this.name}] te saluda`)    
}