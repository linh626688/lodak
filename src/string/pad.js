export const pad = function (string, length, chars) {
    var strLength = string.length;
    if (!length || strLength >= length) {
        return string;
    }
    chars = chars === undefined ? ' ' : chars.toString();
    var leftPaddingLength = chars.length;
    var rightPaddingLength = 0;
    if (length - strLength < chars.length)
        leftPaddingLength = length - strLength;
    else
        rightPaddingLength = length - strLength - chars.length;
    return (
        createPadding(leftPaddingLength, chars) +
        string +
        createPadding(rightPaddingLength, chars)
    );
};

function createPadding(length, chars) {
    length = parseInt(length);
    chars = chars.toString();
    if (chars.length > length) {
        return chars.slice(0, length);
    }
    var result = "";
    do {
        if (length > chars.length) {
            result += chars;
        }
        else {
            result += chars.slice(0, length);
        }
        length -= chars.length;
    } while (length>0);
    return result;
}
