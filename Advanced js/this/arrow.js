const obj1 = {
    name: 'Simran',
    sayHello: function(){
        console.log("hello", this);   // obj

        var sayBye = function(){
            console.log('Bye',this)  // global
        }

        sayBye();
    }
    
}

obj1.sayHello()

const obj2 = {
    name: 'Simran',
    sayHello: function(){
        console.log("hello", this);  //obj

        var sayBye = ()=>{
            console.log('Bye',this) // obj
        }

        sayBye();
    }
    
}

obj2.sayHello()



var sayBye = ()=>{
    console.log('Bye',this) // window
}

sayBye();





const character = {
    name: 'Simon',
    getCharacter() {
      return this.name;
    }
  };
  const giveMeTheCharacterNOW = character.getCharacter.bind(character);
  
  //How Would you fix this?
  console.log('?', giveMeTheCharacterNOW()); //this should return 'Simon' but doesn't

console.log(character['name'])  // another way to access the object property