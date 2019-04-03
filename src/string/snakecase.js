export const snakeCase = function (str) {
  var regex = /([(a-z)A-Z]+)/g;
  var output;

  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  output = str.match(regex).map(value => value.toLowerCase());

  output = output.join('_');

  return output;
};
