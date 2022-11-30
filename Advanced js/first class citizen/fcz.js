// functions are first class citizen in JS


// passed function as paraeters
function a(fun){
    fn()
}

function fn(){
    console.log('hi there')
}

a(fn)


// function return function 
function c() {
    console.log('bye')
}


function b(){
    return c();
}

b()