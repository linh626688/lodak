import { camelCase } from './camelCase';
export const lowerCase = (str) => {
    str = camelCase(str);
    var match = /[A-Z]/g.exec(str);
    str = str.replace(match, " " + match);
    str = str.toLowerCase();
    return str;
};