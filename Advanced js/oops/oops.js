// const dragon = {
//     name: 'lucy',
//     weapon: 'fire mouth',
//     atack: function(){
//         return 'attck with ' + this.weapon
//     }

// }

// const dragon2 = {
//     name: 'hardy',
//     weapon: 'wings',
//     atack: function(){
//         return 'attck with ' + this.weapon
//     }

// }

// console.log(dragon.atack())
// console.log(dragon2.atack())



// Factory Functions

// function createDragon(name, weapon){
//     return{
//         name: name,
//         weapon: weapon,
//         attack : function(){
//             return 'attack with ' + weapon
//         }
//     }
// }


// const petty = createDragon('petty', 'water')
// const pika = createDragon('pika', 'thunder')

// console.log(petty.attack())
// console.log(pika.attack())


//Object.create()

// const dragonAttackFunction = {
//     attack : function(){
//         return 'attack with ' + this.weapon
//     }
// }


// function createDragon(name,weapon){
//     let newDragon = Object.create(dragonAttackFunction)
//      newDragon.name = name;
//      newDragon.weapon =weapon;
//      return newDragon;
// }
 

// const peter = createDragon('peter', 'stones')
// console.log(peter.attack())


// example 2


 const coder = {
    isStudying: true,
    printIntro: function(){
        console.log((`My name is ${this.name}. am i studying?: ${this.isStudying}`))
    }
 }


 const student = Object.create(coder)
 console.log(student)
 console.log(student.__proto__)

 student.name = 'demo';

 student.isStudying = true


 console.log(student)

 student.printIntro()