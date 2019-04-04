import { padStart } from './padStart';
test('Convert string "hello" to "   hello"', () => {
  expect(padStart('hello', 9, '')).toBe('    hello');
});
test('Convert string "hello" to "   hello"', () => {
  expect(padStart('hello', 9, true)).toBe('    hello');
});
test('Convert string "hello" to "   hello"', () => {
  expect(padStart('hello', 9, null)).toBe('    hello');
});
test('Convert string "hello" to "   hello"', () => {
  expect(padStart('hello', 9, false)).toBe('    hello');
});
test('Convert string "hello" to "+-+hello"', () => {
  expect(padStart('hello', 8, '+-')).toBe('+-+hello');
});
test('Convert string "hello" to "+-+-+hello"', () => {
  expect(padStart('hello', 10, '+-')).toBe('+-+-+hello');
});
test('Convert string "hello" to "***hello"', () => {
  expect(padStart('hello', 8, '**')).toBe('***hello');
});
