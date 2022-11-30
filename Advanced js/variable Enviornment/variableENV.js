function two(){
    var isValid;
}

function one(){
    var isValid = true;
    two();
}

var isValid = false;

one();



// Call Stack

//two() ---- undifined   3rd
//one() ---- true   2nd
//gloabl() ---- flase   1st


// so when fuunctions execution is done it will pop out one by one from the top

