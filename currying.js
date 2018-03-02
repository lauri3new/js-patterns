function add(a, b) {
  return a + b;
}

// curried add, a higher order function

function cAdd(a) {
  return function(b) {
    return a + b;
  }
}

console.log(add(5, 5)); // 10
var add5 = cAdd(5); // add5 is a function that accepts argument b
console.log(add5(5)); // 10

// more elegant in es6

const multiply = (a) => (b) => a * b;

const multiplyBy5 = multiply(5);
console.log(multiplyBy5(5)) // 25
 