// pass by value 

// here original value will not change it will create a copy of original vlaue

var a = 5;
var b = a;
 b++
 console.log(a)
 console.log(b)

// pass by refrence

// here it does not make a copy of original here both obj1 and obj2 is pointing to same memory wherey obj is {name:'rohan, password: 12345   }

let obj1 = {
    name:'rohan',
    password: 12345
}

let obj2 = obj1

obj2.password = 'easpeasy'

console.log(obj1)
console.log(obj2)


// Now array is also object so it will also act like pass by refrence

var c = [1,2,3];
var d = c;

// to clone an array

var e = [].concat(c);

c.push(1282899)

console.log(c)
console.log(d)
console.log(e)



// for object to clone or copy 

let obj = {
    a: 'a',
    b: 'b',
    c: {
        deep:'try and copy me'
    }
};

let clone = Object.assign({},obj);
 
// another way
let clone2 = {...obj}

let superClone = JSON.parse(JSON.stringify(obj))  //this is deep clonoing  

// it will first stringfy the obj that means it will convert whole object into string and once we done turn everything into string we're going to parse it and turn that string back into an object

obj.c.deep = 'haha'; //it will change the copy also becuase its pass by refrence and it is called shallow
//  it clone the first level 

console.log(obj)
console.log(clone)
console.log(clone2)
console.log(superClone)


var user1 = {name : "nerd", org: "dev"};
var user2 = {name : "nerd", org: "dev"};
var eq = JSON.stringify(user1)  == JSON.stringify(user2);

console.log(eq)


