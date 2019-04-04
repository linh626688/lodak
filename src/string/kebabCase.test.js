import { kebabCase } from './kebabCase';
test('convert "Foo Bar" to "foo-bar"', () => {
  expect(kebabCase('Foo Bar')).toBe('foo-bar');
});
test('convert "fooBar" to "foo-bar"', () => {
  expect(kebabCase('fooBar')).toBe('foo-bar');
});
test('convert "__FOO_BAR__" to "foo-bar"', () => {
  expect(kebabCase('__FOO_BAR__')).toBe('foo-bar');
});
