// Function Expression

var canada = function (){
    console.log('cold')
}


// Function Declaration

 function india(){
    console.log('warm')
 }


 // Function Invocation/Call/Execution

 canada()
 india()

// Arguments

 function marry(person1, person2){
    console.log('arguments', arguments)
    console.log(Array.from(arguments))
    return `${person1} is now married to ${person2}`
 }
 marry('tim','tina')

 

 function marry2(...args){
   console.log('arguments', args)
   return `${args[0]} is now married to ${args[1]}`
}

console.log( marry2('tim','tina'))



function marry(person1,person2){
   console.log('with Array.form ', Array.from(arguments))
   console.log(arguments)
   return `${person1}  is married to ${person2}`
}

console.log(marry('jhon', 'lilly'))

// 2nd way to make it array


function marry1(...args){
   console.log('With using spread Operator ',args)
   return `${args[0]}  is married to ${args[2]}`
}

console.log(marry1('tim', 'sally'))
