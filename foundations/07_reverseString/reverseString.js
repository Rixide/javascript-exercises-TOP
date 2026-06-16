const reverseString = function(words) {
    let reversed = "";
    let number = (words.length) ;
    for(let i=0; i< number; number--){
        reversed += words[(number - 1)];
    }
    return reversed
};

// Do not edit below this line
module.exports = reverseString;
