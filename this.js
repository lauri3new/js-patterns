// this is a binding made for each function invocation, based entirely on its call-site (how the function is called).

// Default Binding, if function callsite is in global scope this refers to global scope ..

function db() {
	console.log( this.a );
}

a = 1;

db(); // 1

// Implicit Binding: call site refers to owning object of function
function ib() {
	console.log( this.a );
}

var obj = {
	a: 2,
	ib: ib
};

obj.ib(); // 2

// Explicit Binding: pass in this context
function eb() {
	console.log( this.a );
}

var obj1 = {
	a: 3,
	eb: eb
};

x = obj1.eb; // 3
x.call(obj1);

// new Binding: assigns this to point to newly created object
function foo(a) {
	this.a = a;
}

var bar = new foo( 4 );
console.log( bar.a ); // 4

