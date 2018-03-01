var mixin = {
  sayHello: function() {
    console.log('hello im ' + this.name);
  },
  sayThanks: function(person) {
    console.log('thanks ' + person);
  }
}

function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function() {
  console.log('my name is ' + this.name);
}

// easy to copy to prototype using es6 Object.assign
Person.prototype = Object.assign(Person.prototype, mixin);

var jon = new Person('jonstable');

jon.sayHello();
jon.sayName();
jon.sayThanks('batman');
