const repeatString = function(word, times) {
    if (times < 0) return "ERROR";
    let completeString = ""
    for (let i = 0; i < times; i++){
        completeString += word
    }
    return completeString
};

// Do not edit below this line
module.exports = repeatString;