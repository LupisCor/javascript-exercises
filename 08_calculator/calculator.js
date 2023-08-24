const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arr) {
	let sumTotal = 0;
  arr.forEach(element => sumTotal+=element);
  return sumTotal;
};

const multiply = function(arr) {
  let product = 1;
  arr.forEach(element => product*=element);
  return product;
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(num) {
	if (num === 0 || num === 1){
    return 1;
  }
  for (i = num-1; i>= 1; i--){
    num *= i;
  }
  return num;
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
