// No side effects
//input -----> output

const array = [1,2,3]

function a(arr){
  arr.pop()
}                   //this function has side effect it is modifying outside array


a(array);
a(array);
// console.log(array)



// How to avoid this side effect

const arr1 = [10,11,12]

function b(arr){
    const newArray = [].concat(arr1)
     newArray.pop()
     return newArray
}

console.log(b(arr1))
console.log(arr1)



// its not a pure function its affecting the outside world in  browser

function c(){
    console.log('hi')
}

c()



function d(num1,num2){
    return num1 + num2
}

console.log(d(2,3))