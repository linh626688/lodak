export const snakeCase = function (str) {
    var pos;
    var newString = '';
    var oldString = '';
    var i;
    var j;
  
    str = str.replace(/[!@#$%^&_ ]/g, '-');
    str = str.replace(/([a-z])([A-Z])/g, '$1-$2');
    str = str.toLowerCase();
    pos = str.search(/[a-z]/);
  
    str = str.slice(pos, str.length);
  
    for (i = str.length - 1; i >= 0; i--) {
      newString = newString + str[i];
    }
    pos = newString.search(/[a-z]/);
  
    newString = newString.slice(pos, newString.length);
    for (j = newString.length - 1; j >= 0; j--) {
      oldString = oldString + newString[j];
    }
    oldString = oldString.replace(/-/g,"_");
    return oldString;
  };