import { lowerCase } from './lowerCase';

test('should convert "--Foo-Bar--" to  "foo bar"', () => {
  expect(lowerCase('--Foo-Bar--')).toBe('foo bar');
});

test('should convert "fooBar" to "foo bar"', () => {
  expect(lowerCase('fooBar')).toBe('foo bar');
});

test('should convert "__FOO_BAR__" to "foo bar"', () => {
  expect(lowerCase('__FOO_BAR__')).toBe('foo bar');
});
