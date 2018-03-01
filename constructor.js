// es5 constructor

function Person(name, age) {
  this.age = age;
  this.name = name;
}

Person.prototype.sayName = function() {
  console.log('hello my name is: ' + this.name);
}

var jon = new Person('Jon', 30);
jon.sayName(); // 'hello my name is: jon'
console.log(jon.age); // 30
var sarah = new Person('sarah', 31);
sarah.sayName(); // 'hello my name is: sarah'
console.log(sarah.age); // 31

// es6 class

class es6Person {

  constructor(name, age) {
    this.age = age;
    this.name = name;
  }

  sayName() {
    console.log('hello my name is: ' + this.name);
  }

}

var es6jon = new es6Person('Jon', 30);
es6jon.sayName(); // 'hello my name is: jon'
console.log(es6jon.age); // 30
var es6sarah = new es6Person('sarah', 31);
es6sarah.sayName(); // 'hello my name is: sarah'
console.log(es6sarah.age); // 31