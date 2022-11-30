var x = 'x'
function findName(){
    var b = 'b';
    console.log(x)
    return printName()
}

function printName(){
    var c= 'c';
    console.log('hellooo my name is demo') 

}

function sayMyName(){
    var a = 'a';
    return findName()
}

sayMyName()




function say(){
    var a = 'a'
    return function find(){
        var b = 'b'
        return function print(){
            var c = 'c'
            console.log('demo')
        }
    }
}

say()()()




var globalName = 'global'

function sayName2(){
    var name = 'nitesh';
    var age = 23;
    console.log(name);
 return function sayAge(){
    console.log(age)

    return function sayGlobalName(){
        console.log(globalName)
    }
  }

}

sayName2()()()