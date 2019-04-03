import { repeat } from './repeat';
test('repeat "b" 3 times to  "bbb"', () => {
  expect(repeat('b', 3)).toBe('bbb');
});
test('repeat "c" 7 times to  "ccccccc"', () => {
  expect(repeat('c', 7)).toBe('ccccccc');
});
test('repeat "hello" 2 times to  "hellohello"', () => {
  expect(repeat('hello', 2)).toBe('hellohello');
});
test('repeat "vu" 3 times to  "vuvuvu"', () => {
  expect(repeat('vu', 3)).toBe('vuvuvu');
});
test('no repeat "vu"  to  ""', () => {
  expect(repeat('vu', 0)).toBe('');
});
