// basic: function that returns object

function vehicleFactory(make, wheels, cc) {
  
  // private variable..
  var cc = cc;

  return {
    make: make,
    wheels: wheels,
    getcc: function() {
     return cc; 
    },
    setcc: function(newcc) {
      cc = newcc;
    },
  }
}

var car = vehicleFactory('ferrari', 4, 2000);
console.log(car.getcc());
car.setcc(100);
console.log(car.cc); // undefined
console.log(car.getcc());

// silly exmaple


function createPerson(type, age, name, powers) {
  let base = {
    age,
    name,
  }
  switch(type) {
    case 'Person':
     base.sayName = function() {
       console.log('hello my name is ' + base.name)
     }
     base.sayPowers = function() {
      console.log('dont have any powers innit')
    }
    break;
    case 'SuperHero':
    base.sayName = function() {
      console.log('hello I cnat tell you my identiy')
    }
    base.sayPowers = function() {
      base.powers = powers;
      console.log('heres my powers ' + base.powers.join());
    }
    break;
  }
  return base;
}

var jon = createPerson('Person', 30, 'jon');
var superJon = createPerson('SuperHero', 30, 'jon', ['jump', 'swim', 'fly']);

jon.sayName();
superJon.sayName();
jon.sayPowers();
superJon.sayPowers();


