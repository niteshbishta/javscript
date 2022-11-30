// function a(){
//     console.log('hi')
// }

// a()    // this is short hand  of below
// // a.call()


// const wizard = {
//     name: 'merlin',
//     health: '40',
//     heal : function(num1 , num2){
//         console.log(this.health = num1 + num2) 
//     }
// }


// const archer = {
//     name: 'robin hood',
//     health: 20
// }

// console.log('1',archer)

// wizard.heal.call(archer,50,70)

// wizard.heal.apply(archer,[50,70])
// wizard.heal.bind(archer,50,70)

// const healArcher = wizard.heal.bind(archer,50,70)

// healArcher()
// console.log('2',archer)




// const wizard = {
//     name: 'goku',
//     health: 70,
//     heal: function(num1, num2){
//         // return this.health = 100;
//         return this.health = num1 + num2;
//     }
// }

// const dragon = {
//     name: 'firesy',
//     health: 30
// }

// console.log('goku health beofer healing' , wizard.health)
// console.log('goku health after healing' ,wizard.heal())


// console.log('health of firesy' , dragon.health)

// const healDragon = wizard.heal.bind(dragon, 100, 20)
// healDragon()

// console.log('after taking heal feature from goku health of firesy' , dragon.health)