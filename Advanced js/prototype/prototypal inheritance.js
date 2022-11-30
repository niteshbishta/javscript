let person1 = {
    name: 'jhon',
    city: 'Neywork',
    getIntro: function(){
        console.log(this.name + ' from ' + this.city)
    }
}


let person2 = {
    name: 'sunny'
}
person2.__proto__ = person1

console.log(person2.getIntro())

for (let prop in  person2){
    if(person2.hasOwnProperty(prop)){
        console.log(prop)
    }
    
}