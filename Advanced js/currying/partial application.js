function addPartial(x,y,z){
    return x+y+z;
}


const partialFn = addPartial.bind(null,2)

console.log(partialFn(4,6))