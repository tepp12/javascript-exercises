const palindromes = function (string) {
    let array = string.split("")
    array = array.reverse()
    let reversedString = array.join("")
    string == reversedString ? true : false
};

// Do not edit below this line
module.exports = palindromes;
