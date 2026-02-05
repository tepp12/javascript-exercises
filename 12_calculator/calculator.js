const add = function(num1, num2) {
  return num1 + num2
};

const subtract = function(num1, num2) {
  return num1 - num2
};

const sum = function(theArray) {
    return theArray.reduce((sum, item) => {
    sum += item
    return sum;
  }, 0)
};

const multiply = function(num1, num2) {
  return num1*num2
};

const power = function(num1, exponent) {
    return Math.pow(num1, exponent)
};

const factorial = function(num1, factory) {
    if (factory <= 1) return 1
  for (let i=factory; i >= 1; i--){
    num1 *= i
  }
  return num1
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
