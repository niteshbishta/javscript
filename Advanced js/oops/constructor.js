// constructor Function

// object.create() was not there from starting so befor that we used to use constructor functions

function Dragon(name,weapon){
    this.name = name;
    this.weapon = weapon;
}

//adding attck function to prototype 

Dragon.prototype.attack = function(){
    return 'attcak with ' + this.weapon
}

const peter = new Dragon('peter','stone')

console.log(peter.name)
console.log(peter.attack())


//Creating dragon function using constructor


// const Dragon = new Function('name','weapon',
// `this.name = name;
// this.weapon = weapon`)

// const sarah = new Dragon('sarah','fireworks')


// console.log(sarah)


