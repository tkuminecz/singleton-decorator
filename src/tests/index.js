import test from 'tape';
import singleton from 'singleton-decorator';

test('implicit style by default', t => {

	t.plan(2);

	@singleton
	class Foo {
	}

	const a = new Foo();
	const b = new Foo();
	const c = Foo();

	t.equals(a, b);
	t.equals(a, c);
});

test('implicit style is allowed', t => {

	t.plan(2);

	@singleton('implicit')
	class Foo {
	}

	const a = new Foo();
	const b = new Foo();
	const c = Foo();

	t.equals(a, b);
	t.equals(a, c);
});

test('explicit style is allowed', t => {

	t.plan(1);

	@singleton('explicit')
	class Foo {
	}

	const a = Foo.getInstance();
	const b = Foo.getInstance();

	t.equals(a, b);
});

test('unallowed styles throw an error', t => {

	let invalid_styles = [
		'invalid',
		'a87sf87897sadfa',
		'another-bad-style',
		'impicit',
		'expicit'
	];

	t.plan(invalid_styles.length);

	invalid_styles.forEach(style => {

		try {
			@singleton(style)
			class Foo {
			}

			t.fail('should have throw an exception');
		}
		catch (err) {
			t.equals(`Unknown singleton style '${style}'. Please omit or specifiy either 'explicit' or 'implicit'.`, err.message);
		}

	});

});
