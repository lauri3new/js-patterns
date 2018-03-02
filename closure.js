// can return either named or anonymous function here..
// function returned is closed over scope of helloWorld
// so that a is available wherever it is used it is available
function helloWorld() {
  console.log('hello world');
  var a = 'hehe a secret';
  return function (name) {
    console.log(a + ' and ' + name);
  };
}

var saySecretAndName = helloWorld(); // hello world

saySecretAndName('jon'); // hehe secret
