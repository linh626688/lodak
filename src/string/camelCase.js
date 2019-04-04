export const camelCase = (str) => {
  if (/^[a-zA-Z]+$/.test(str)) {
    return str;
  }
  var match = /[a-z]|[A-Z]/g.exec(str);
  str = str.slice(match.index, str.length);
  return str.toLowerCase()
    .replace(/\s(.)|\-(.)|\_(.)/g, function ($1) {
      return $1.toUpperCase();
    })
    .replace(/\@|\#|\$|\^|\$|\_|\-|\s/g, '');
};