// es5 prototypal inheritance, SuperHero is a subclass of superclass Person

// Person constructor
function Person(name, age) {
  // default vals:
  this.age = age || 40;
  this.name = name;
}

// Person methods
Person.prototype.sayName = function() {
  console.log('hello my name is: ' + this.name);
}
Person.prototype.sayAge = function() {
  console.log('I am ' + this.age + ' years old');
}
Person.prototype.sayPowers = function() {
  console.log('no powers');
}

// new keyowrd calls Person as constructor, returns instantiated objects
var jon = new Person('Jon', 30);
jon.sayName(); // 'hello my name is: jon'
console.log(jon.age); // 30
var sarah = new Person('sarah');
sarah.sayName(); // 'hello my name is: sarah'
sarah.sayAge(); // 40


// SuperHero, subclass of Person, calls Persons constructor, defines additional properties
function SuperHero(name, age, powers) {
  Person.call(this, name, 'infinite');
  this.powers = powers;
}

// assign prototype of SuperHero to copy of Person.prototype to copy accross methods,
// assign prototype.constructor to SuperHero instead of Person, in case we use this.constructor
// in any methods..
SuperHero.prototype = Object.create(Person.prototype);
// assign additional methods/ override methods
SuperHero.prototype.sayPowers = function() {
  console.log('I can ' + this.powers.join(', '));
}
SuperHero.prototype.sayAge = function() {
  console.log('I am ageless mon');
}

var banana = new SuperHero('banana', null, ['jump', 'fly']);
banana.sayName(); // 'hello my name is: banana'
banana.sayPowers(); // 
banana.sayAge();


// assign prototype.constructor to SuperHero so it points to SuperHero not person
// in case we reference constructor in a method.
SuperHero.prototype.constructor = SuperHero;
SuperHero.prototype.copy = function () {
  return new this.constructor(this.name, this.age, this.powers);
}

var banana2 = banana.copy();
banana2.sayPowers();

// Call super class methods, reference other class...

SuperHero.prototype.sayIncogPowers = function() {
  Person.prototype.sayPowers.call(this);
}

banana.sayIncogPowers();





