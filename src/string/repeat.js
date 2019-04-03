export const repeat = function (str, repeatTime) {
  var string = '';
  var i;

  for (i = 0; i < repeatTime; i++) {
    string = string + str;
  }
  return string;
};
