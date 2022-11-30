
// //gives method access to there object
// const obj = {
//     nam: 'billy',
//     sing: function(){
//         console.log(this)
//         return'lalalal '+ this.nam
//     },
//     singAgain: function(){
//         return this.sing() + '!'
//     }
    
// }

// console.log(obj.singAgain()) 


// // execute same code for multiple objects


// function importantPerson(){
//     console.log(this.names + '!')
//     // console.log(this)
//  }
 
//  var names = 'Sunny';
  
//  const obj1 = {
//      names: 'Cassy',
//      importantPerson: importantPerson
 
//  }
 
//  const obj2 = {
//      names: 'Jacob',
//      importantPerson: importantPerson
//  }
//  obj1.importantPerson()
//  importantPerson()


// const obj1 = {
//     name:'demo',
//     sing: function(){
//         console.log(this)
//         console.log('lalalal my name is ' + this.name)
//     }

// }


// function a(){
//     console.log(this)
// }

// a()

// obj1.sing()


const obj2 = {
    name:'lily',
    sayHi: function(){
        console.log(this.name)
        console.log('helllooo')

        var sayBye = ()=>{
            console.log(this)
            console.log('byeeeee')
        }

        sayBye()

    }
}

obj2.sayHi()
