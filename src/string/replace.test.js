import { replace } from './replace';
test('replace string "Fred" in string "Hi Fred" with string "Barney" expected "Hi Barney" ', () => {
  expect(replace('Hi Fred', "Fred", "Barney")).toBe('Hi Barney');
});