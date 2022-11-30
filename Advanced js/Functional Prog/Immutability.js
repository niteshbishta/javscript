// the idea of immutability that is not changing state, but instead making copies of the state and returning the state every time


// here its changing the original object

// const obj = {
//     name: 'nitesh',
//     age: 23
// }

// function update(){
//     return obj.name = 'lala'
// }

// const updated =update()

// console.log(updated)

// console.log(obj)


//Immutability

const obj1 = {
    name:'nitesh',
    age:'23'
}

function update1(){
    const newObj = {...obj1}
    newObj.name = 'Nitesh Bishta'
    return newObj
}


const updatedName = update1()

console.log(updatedName)
console.log(obj1)