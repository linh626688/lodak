import { capitalize } from './capitalize';
test('Converts "h" to upper case and "EllO" to lower case', () => {
  expect(capitalize('hEllO')).toBe('Hello');
});
test('Converts "t" to upper case and "ESt" to lower case', () => {
  expect(capitalize('tESt')).toBe('Test');
});
test('Converts "h" to upper case and "EllO EveryBoDy" to lower case', () => {
  expect(capitalize('hELLO EveryBoDy')).toBe('Hello everybody');
});
test('Converts "d" to upper case and "EfauLT" to lower case', () => {
  expect(capitalize('dEfauLT')).toBe('Default');
});
