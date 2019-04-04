export const capitalize = function (str) {
  var headString = str.slice(0, 1);
  var tailString = str.slice(1, str.length);
  var result = '';

  headString = headString.toUpperCase();
  tailString = tailString.toLowerCase();
  result = headString + tailString;

  return result;
};
