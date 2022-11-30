// Function scope

function displayAge(){
    var age = 23;
    console.log(age)
    
}

displayAge()
// console.log(age)  cannot access outside the function

// if(true){
//     var age = 24;
    
// }

// console.log(age)

// if(true){
//     let age = 24;
    
// }

// console.log(age)


// for(var i = 0; i < 5; i++){

// }
// console.log(i)


// for(let i = 0; i < 5; i++){

// }
// console.log(i)
 

//for var it will work

// var age = 3
// var age = 5

// console.log(age)


// for let it will not work 
// let age = 3
// let age = 5

// console.log(age)

//this will also not work
// var age = 3
// let age = 5

// console.log(age)


// this will work
// var age = 3
// {
//     let age = 5
// }

// console.log(age)

// this will not work
// let age = 3
// {
//     var age = 5
// }

// console.log(age)



if(true){
    let name = 'demo'
    console.log(name)
}

