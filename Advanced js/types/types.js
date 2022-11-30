//Primitive
console.log(typeof 5)
console.log(typeof true)
console.log(typeof 'to be or not to be')
console.log(typeof undefined)
console.log(typeof null)   //object its a mistake and can't be change because there is so much legacy  code if change it'll break the code
console.log(typeof Symbol('just me'))

//Non-Primitive 
console.log(typeof {})
console.log(typeof [])
console.log(typeof function(){})


let id1 = 'id';
let id2 = 'id';

console.log(id1 === id2)


let id3 = Symbol('id');
let id4= Symbol('id');

console.log(id3 === id4)


// function is just Object 

function a(){
    return 5
}

a.hi = 'hihihihhi'

console.log(a.hi)


console.log(Boolean(true).toString())


var arry = [1,2,3]
var obj = {}

console.log('is it a array ',Array.isArray(arry))

console.log('is it a array ',Array.isArray(obj))
