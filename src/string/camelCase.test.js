import { camelCase } from './camelCase';

test('should convert "Foo Bar" to  "fooBar"', () => {
  expect(camelCase('Foo Bar')).toBe('fooBar');
});

test('should convert "--foo-bar--" to "fooBar"', () => {
  expect(camelCase('--foo-bar--')).toBe('fooBar');
});

test('should convert "__FOO_BAR__" to "fooBar"', () => {
  expect(camelCase('__FOO_BAR__')).toBe('fooBar');
});

test('should convert "#@#@_^#$^_FOO_BAR__" to "fooBar"', () => {
  expect(camelCase('__FOO_BAR__')).toBe('fooBar');
});