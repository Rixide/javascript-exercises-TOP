const repeatString = function(word, number) {
    let results ="";

    if(number < 0){
        return "ERROR"
    }
    for(let i=0; i < number; i++){
        results+=word;
    }
    return results;
};

// Do not edit below this line
module.exports = repeatString;
