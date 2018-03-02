// thunk is higher order function with no params that returns expression/code block

var x = 5 + 10;

var thunkX = function() {
  return 5 + 10;
}

function doStuff() {
  var l = 'hello';
  console.log(l.repeat(5));
}

var thunk = function() {
  return doStuff();
}

console.log(thunkX());
thunk();