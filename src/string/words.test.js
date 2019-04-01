import { words } from './words';
test('Can extract words from normal string', () => {
  expect(words('fred,barney,pebbles')).toEqual(['fred', 'barney', 'pebbles']);
});
