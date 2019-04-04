export const trim = function (str, re) {
  var i;
  var demo;

  if (re == null) {
    str = str.replace(/ /g, '');
    return str;
  }
  str = str.replace(/ /g, '');
  for (i = 0; i <= re.length; i++) {
    demo = new RegExp(re[i], 'g');

    str = str.replace(demo, '');
  }

  return str;
};
