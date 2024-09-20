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

// .concat = joins two or more strings

function concatenateStrings(str1, str2) {
    if (str1 && str2 && (isNaN(str1)) && (isNaN(str2))) {
        return str1.concat(str2);
    } else if ((str1 && str2) && ((!isNaN(str1)) || (!isNaN(str2)))) {
        return "Value given to function was of Data Type: number";
    }
}








module.exports = {
    getCharAt,
    concatenateStrings,
    /* doesInclude,
    getIndexOf,
    sliceString,
    splitString,
    convertToLowerCase,
    convertToUpperCase,
    trimString,
    replaceSubstring */
};