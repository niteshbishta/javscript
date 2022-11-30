// memory efficient

 function heavyDuty(index){
    const bigArry = new Array(7000).fill('hell')
    console.log('created')
    return bigArry[index]
 }

 console.log(heavyDuty(457))
 console.log(heavyDuty(1057))
 console.log(heavyDuty(1057))

// heavyDuty(457)
// heavyDuty(457)
// heavyDuty(457)

const getHeavyDuty = heavyDuty2();

// getHeavyDuty(2333)
// getHeavyDuty(2333)
// getHeavyDuty(2333)
console.log(getHeavyDuty(1057))
console.log(getHeavyDuty(1057))
console.log(getHeavyDuty(1057))


function heavyDuty2(){
    const bigArry = new Array(7000).fill('hello')
    console.log('created again')
    return function (index){
        return bigArry[index]
    }
}