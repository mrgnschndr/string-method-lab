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


// .includes = check if an array contains a specified value

function doesInclude(str1, str2) {
    if (str1 && str2 && (isNaN(str1)) && (isNaN(str2))) {
        return str1.includes(str2);
    } else if ((str1 && str2) && ((!isNaN(str1)) || (!isNaN(str2)))) {
        return "Value given to function was of Data Type: number";
    } else if (!str1 || !str2) {
        return "String is empty";
    }
}

// .indexOf = returns the index (position of a specified value)

function getIndexOf(str1, str2) {
    if (str1 && str2 && (isNaN(str1)) && (isNaN(str2))) {
        return str1.indexOf(str2);
    } else if ((str1 && str2) && ((!isNaN(str1)) || (!isNaN(str2)))) {
        return "Value given to function was of Data Type: number";
    } else if (!str1 || !str2) {
        return "String is empty";
    }
}

// .slice = returns selected elements 

function sliceString(str, num1, num2) {
    if (str && (isNaN(str)) && !(isNaN(num1)) && !(isNaN(num2))) {
        return str.slice(num1, num2);
    } else if (str && (!isNaN(str))) {
        return "Value given to function was of Data Type: number";
    } else if (!str) {
        return "String is empty";
    }
}

// .split = splits a string into an array of substrings

function splitString(str, separator) {
    if (str && separator && (isNaN(str))) {
        return str.split(separator);
    } else if (str && (!isNaN(str))) {
        return "Value given to function was of Data Type: number";
    } else if (!str) {
        return "String is empty";
    }
}

// .toLowerCase = converts a string to lowercase letters

function convertToLowerCase(str) {
    if (str && (isNaN(str))) {
        return str.toLowerCase();
    } else if (str && (!isNaN(str))) {
        return "Value given to function was of Data Type: number";
    } else if (!str) {
        return "String is empty";
    }
}



module.exports = {
    getCharAt,
    concatenateStrings,
    doesInclude,
    getIndexOf,
    sliceString,
    splitString,
    convertToLowerCase,
    /* convertToUpperCase,
    trimString,
    replaceSubstring */
};