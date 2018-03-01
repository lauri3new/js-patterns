// .call calls a function with a given this value and arguments provided individually
function List(apple, orange, banana) {
  this.apple = apple;
  this.orange = orange;
  this.banana = banana;
}

var list = new List('jazz', 'mandarin', 'fairtrade');

function ShoppingList(apple, orange, banana, money) {
  List.call(this, apple, orange, banana);
  this.money = money;
}

var shoppingList = new ShoppingList('pinky lady', 'mandarin', 'fairtrade', 100);

// .apply calls a function with a given this value and array of arguments

function BucketList(apple, orange, banana, money) {
  let array = [apple, orange, banana];
  List.apply(this, array);
  this.money = money;
}

var bucketList = new ShoppingList('green lady', 'marin', 'fairtrade', 200);
console.log(bucketList);

// .bind, explicitly binds this context for a function, wherever it is invoked/referred...

var egg = {
  name: 'chuckie',
  sayName: function() {
    console.log('my name is ' + this.name);
  },
};

var x = egg.sayName;
var y = {
  name: 'cream',
  sayName: x,
  sayEggsName: x.bind(egg)
}
y.sayName();
y.sayEggsName();

// bind simple polyfill (jjust for this context not currying, dosnt take account of function args)

Function.prototype.myBind = function(context) {
  // fn is reference to function
  let fn = this;
  // returns new function that when called will have this of context..
  return function() {
    return fn.call(context)
  }
}

var z = {
  name: 'zaza',
  sayName: x,
  sayEggsName: x.myBind(egg)
}
z.sayName();
z.sayEggsName();

