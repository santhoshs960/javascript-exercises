const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((acc, cur) => {
    return acc + cur
  }, 0)
};

const multiply = function (arr) {
  return arr.reduce((acc, cur) => {
    return acc * cur
  }, 1)
};

const power = function (a, b) {
  let pow = 1;
  for (i = 0; i < b; i++) {
    pow *= a
  }
  return pow
};

const factorial = function (a) {
  if (a == 0) {
    return 1;
  } else {
    let fact = 1;
    for (i = a; i > 0; i--) {
      fact *= i;
    }
    return fact;
  }
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
