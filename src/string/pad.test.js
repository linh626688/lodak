import { pad } from './pad';
test('padding "abc" string based on 8 length with char "space" expected "  abc   " ', () => {
  expect(pad('abc', 8)).toBe(' abc    ');
});
test('padding "abc" string based on 8 length with char "_-" expected "_-abc_-_" ', () => {
  expect(pad('abc', 8, "_-")).toBe('_-abc_-_');
});
test('padding "abc" string based on 3 length with char " " expected "abc" ', () => {
  expect(pad('abc', 3)).toBe('abc');
});

