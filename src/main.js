import singleton from './module/index.js';

@singleton
class Foo {
}

let a = new Foo(),
	b = new Foo(),
	c = Foo();

console.log(a, b, c, a === b, b === c);
