import { _ } from './repeat.js';
test('should convert "b" to  "bbb"', ()=>{
  expect(_.repeat('b', 3)).toBe('bbb');
});
test('should convert "c" to  "ccccccc"', ()=>{
  expect(_.repeat('c', 7)).toBe('ccccccc');
});
test('should convert "hello" to  "hellohello"', ()=>{
  expect(_.repeat('hello', 2)).toBe('hellohello');
});
test('should convert "vu" to  "vuvuvu"', ()=>{
  expect(_.repeat('vu', 3)).toBe('vuvuvu');
});
