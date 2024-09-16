const add = function(a, b) {
	return(a + b)
};

const subtract = function(a, b) {
	return(a - b)
};

const sum = function(arr) {
	return(arr.reduce((arrSum, a) => arrSum + a, 0))
};

const multiply = function(arr) {
  return(arr.reduce((arrMulti, a) => arrMulti * a, 1))
};

const power = function(a, b) {
	return(a ** b)
};

const factorial = function(a) {
	arr = Array(a).fill().map((_, index) => index + 1)

  return(arr.reduce((arrMulti, a) => arrMulti * a, 1))
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
