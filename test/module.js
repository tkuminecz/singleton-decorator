import singleton from '../src/module/index.js';
import test from 'tape';

// put test code here

test('implicit style by default', (t) => {

	t.plan(1);

	@singleton
	class Foo {
	}

	const a = new Foo();
	const b = new Foo();

	t.equals(a, b);
});
