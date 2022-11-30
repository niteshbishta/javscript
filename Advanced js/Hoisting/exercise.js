
console.log(one)
var one = 1
var one = 2


console.log(one)





a()

function a(){
    console.log('hi')
}

function a(){
    console.log('bye')
}


function bigBrother(){
    function littleBrother() {
      console.log('it is me!') ;
    }
    return littleBrother();
    function littleBrother() {
      console.log('no me!') ;
    }
  }
  
  // Before running this code, what do you think the output is?
  bigBrother();