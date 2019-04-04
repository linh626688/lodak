export const padStart = function (str, lengthFull, chars) {
  var a = lengthFull - str.length;

  var i;

  if (a <= 0) {
    return str;
  }
  if (chars == null || chars.length == null || chars === isNaN || chars.length === 0) {
    for (i = 0; i < a; i++) {
      str = ' ' + str;
    }
    return str;
  }
  for (i = 0; i < a; i++) {
    str = chars + str;
  }
  str = str.slice(0, a) + str.slice(chars.length * a, str.length);
  return str;
};
