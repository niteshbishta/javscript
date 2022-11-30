// non currying version

const add = function(a,b,c){
       return a+b+c;
}
console.log('non currying version ',add(1,2,3))


// currying version

const add1 = function(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}

console.log('currying version ',add1(1)(2)(3))


const multiply = (a) => {
    return (b)=>{
        return a *b
    }
}

console.log(multiply(2)(3))


const multiplyBy2 = multiply(2)

console.log(multiplyBy2(7))