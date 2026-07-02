const sumAll = function(numberOne, numberTwo) {
    let result = 0;

    if( !Number.isInteger(numberOne) || !Number.isInteger(numberTwo) || numberOne < 0 || numberTwo < 0) return "ERROR";
    if(numberOne > numberTwo){
        for(let i= numberTwo; i <= numberOne; i++){
            result+=i;
        }
    }else if(numberTwo > numberOne){
        for(let i= numberOne; i <=numberTwo ; i++){
            result+=i;
        }
    }else{
        result = numberOne;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
