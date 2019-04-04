import { trim } from './trim';
test('change "   abc   " to "abc', () => {
  expect(trim('   abc   ')).toBe('abc');
});
test('change "-_-abc-_-" to "abc', () => {
  expect(trim('%-_-abc-_-', '%-_')).toBe('abc');
});
test('change "-_-abc-_-" to "abc', () => {
  expect(trim('-_-abc-_-', '-_')).toBe('abc');
});
