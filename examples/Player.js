const EventEmitter = require("../index.js");

class Player extends EventEmitter{

    constructor(){
        super();
        this._health = 100;
    }

    set health (value){
        let oldHealth = this._health;
        this._health = value;
        this.emit("healthChange", oldHealth, this._health);
    }

    get health(){
        return this._health;
    }

}

let jim = new Player();

jim.addEventListener("healthChange", (oldHealth, newHealth) => {
    console.log(`Players health has changed to ${newHealth}`);
});

jim.health = 53;
jim.health = 98;
jim.health = 57;
jim.health = 36;