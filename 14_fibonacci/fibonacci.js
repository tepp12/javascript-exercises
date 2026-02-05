const fibonacci = function(num) {
    if (num == 0){
        return 0
    }
    if (num == 1){
        return 1
    }
    if (num < 0){
        return
    }
    let result = Math.round(Math.pow((1/2)*(1+(Math.sqrt(5))), num)/Math.sqrt(5))
    return result
};

// Do not edit below this line
module.exports = fibonacci;
