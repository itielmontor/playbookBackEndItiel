module.exports = class pokemon{
    constructor(name){
        $(document).on('change','#input',function(e){
            e.preventDefault
        })
        this.name = name;
    }
    sayHello() {
        console.log(`Mi pokemón ${this.name} te saluda`)    
    }
    sayMessage(message){
        console.log(`Mi pokemón ${this.name} dice ${message}`)
    }
}