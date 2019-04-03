import { snakeCase } from './snakeCase';
test('convert "Foo Bar" to "foo_bar"', () => {
  expect(snakeCase('Foo Bar')).toBe('foo_bar');
});
test('convert "fooBar" to "foo_bar"', () => {
  expect(snakeCase('fooBar')).toBe('foo_bar');
});
test('convert "--FOO-BAR--" to "foo_bar"', () => {
  expect(snakeCase('--FOO-BAR--')).toBe('foo_bar');
});
