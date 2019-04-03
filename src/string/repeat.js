// function _repeat(a, b) {
//   var c = "";
//   for (var i = 0; i < b; i++) {
//     c = c + a;
//   }
//   return c;
// }
// console.log(_repeat("a", 6));

export const _ = {
  repeat: function (a, b) {
    var string = '';
    var i;

    for (i = 0; i < b; i++) {
      string = string + a;
    }
    return string;
  }
};
