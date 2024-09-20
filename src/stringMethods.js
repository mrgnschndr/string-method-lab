// .charAt = returns character at a specific index (position) in a string

function getCharAt(str, num) {
    if (str && num && (isNaN(str))) {
        return str[num];
    } else if (str && num && (!isNaN(str))) {
        return "Value given to function was of Data Type: number";
    } else if (!str) {
        return "String is empty";
    } else if (str.length == 1) {
        return str;
    }
}








module.exports = {
    getCharAt,
    /* concatenateStrings,
    doesInclude,
    getIndexOf,
    sliceString,
    splitString,
    convertToLowerCase,
    convertToUpperCase,
    trimString,
    replaceSubstring */
};