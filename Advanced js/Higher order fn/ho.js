// function()

// function letAdamLogin(){
//     let array = [];
//     for (let i = 0; i < 1000000; i++){
//         array.push(i)
//     }

//     return 'Acces granted to adam'
// }

// console.log(letAdamLogin())


// function letAvaLogin(){
//     let array = [];
//     for (let i = 0; i < 1000000; i++){
//         array.push(i)
//     }

//     return 'Acces granted to ava'
// }

// console.log(letAvaLogin())

// here we are repeating the code what if we have many user login we can't make function again and again


//so that's why parameters come to solve this problem



//function(a,b)

function giveAccessTo(name){
  return 'Access granted to ' + name
}

// function letUserLogin(user){
//     let array = []
//     for(let i=0;i< 1000000; i++){
//         array.push(i);
//     }

//     return giveAccessTo(user)
// }


// console.log(letUserLogin('ava'))


//what if we have admin login and have different time to authenticate (loop) and there can be many different role in company 


// function giveAccessTo(name){
//     return 'Access granted to ' + name
//   }
  
//   function letUserLogin(user){
//       let array = []
//       for(let i=0;i< 5000000; i++){
//           array.push(i);
//       }
  
//       return giveAccessTo(user)
//   }
  
  
//   console.log(letUserLogin('admin'))



//HOF

function authenticate(verify){
    let array = []
          for(let i=0;i< verify; i++){
              array.push(i);
          }
          return true; 
}




function letPerson(person, fn){ ///tell it what data to use + function.
    if(person.level === 'user'){
        fn(1000000)
    } else if (person.level === 'admin'){
        fn(5000000)
    }

    return giveAccessTo(person.name)
}


console.log(letPerson({name:'admin' , level: 'admin'}, authenticate))




// 2nd example of HOF

const multiplyBy = function(num1){
    return function(num2){
        return num1 * num2;
    }
}

const multiplyByTwo = multiplyBy(2)
const multiplyByTen = multiplyBy(10)

console.log(multiplyByTwo(4))

console.log(multiplyByTen(20))



function sayhi(user){
    console.log('verified ' + user)
}


function callSayHi(fn){
   console.log('welcome to the app')
}


callSayHi(sayhi('demo'))