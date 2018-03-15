// applies functions to argument sequentially from right to left
// f(g(x)) = compose(f, g)(x);
const compose = (...funcs) => (input) => {
	return funcs.reverse().reduce((output, singleFunc) => {
  	return singleFunc(output)
  }, input);
};

// example
const add = a => b => a + b;
const multiply = a => b => a * b;

const add5 = add(5);
const multiply5 = multiply(5);

console.log(compose(
  add5,
  multiply5,
  multiply5
)(5)); // 130

console.log(compose(
  multiply5,
  multiply5,
  add5
)(5)); // 250

// provides nice syntax for applying arguments to other curried functions..

console.log(compose(
  add(10),
  multiply(5),
  multiply(5)
)(5)); // 135
