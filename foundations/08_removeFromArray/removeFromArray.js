const removeFromArray = function() {

    const numberOfArgument = arguments.length;
    let result = arguments[0];
    if(numberOfArgument <= 1) return arguments[0];
    for(let i=1; i < numberOfArgument; i++){
        for(let j=1; j < numberOfArgument; j++){
            result = result.filter((item) => item !== arguments[i]);
        }
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
