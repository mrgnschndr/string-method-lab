// .charAt = returns character at a specific index (position) in a string

function getCharAt(str, num) {
    if (typeof(str) != 'string') {
        return `Value given to function was of Data Type: ${typeof(str)}`;
    } else if (str.length == 0) {
        return 'String is empty';
    } else if (str) {
        return str.charAt(num);
    } else {
        'Function gave unexpected result: check arguments.';
    }
}

// Refactored code above
/* function getCharAt(str, num) {
    if (str && num && (isNaN(str))) {
        return str[num];
    } else if (str && num && (!isNaN(str))) {
        return "Value given to function was of Data Type: number";
    } else if (!str) {
        return "String is empty";
    } else if (str.length == 1) {
        return str;
    } else {
        return "Something went wrong."
    }
} */

// .concat = joins two or more strings

function concatenateStrings(str1, str2) {
    if (typeof(str1) != 'string' || typeof(str2) != 'string') {
        return `Value given to function was of Data Type: ${typeof(str1)}`;
    } else if (str1.length == 0 || str2.length == 0) {
        return 'String is empty';
    } else if (str1 && str2) {
        return str1.concat(str2);
    } else {
        return 'Function gave unexpected result: check arguments.';
    }
}

// Refactored code above
/* function concatenateStrings(str1, str2) {
    if (str1 && str2 && (isNaN(str1)) && (isNaN(str2))) {
        return str1.concat(str2);
    } else if ((str1 && str2) && ((!isNaN(str1)) || (!isNaN(str2)))) {
        return "Value given to function was of Data Type: number";
    } else {
        return "Something went wrong."
    }
} */


// .includes = check if an array contains a specified value

function doesInclude(str1, str2) {
    if (typeof(str1) != 'string' || typeof(str2) != 'string') {
        return `Value given to function was of Data Type: ${typeof(str2)}`;
    } else if (str1.length == 0 || str2.length == 0) {
        return 'String is empty';
    } else if (str1 && str2) {
        return str1.includes(str2);
    } else {
        return 'Function gave unexpected result: check arguments.';
    }
}

// Refactored code above
/* function doesInclude(str1, str2) {
    if (str1 && str2 && (isNaN(str1)) && (isNaN(str2))) {
        return str1.includes(str2);
    } else if ((str1 && str2) && ((!isNaN(str1)) || (!isNaN(str2)))) {
        return "Value given to function was of Data Type: number";
    } else if (!str1 || !str2) {
        return "String is empty";
    } else {
        return "Something went wrong."
    }
} */

// .indexOf = returns the index (position of a specified value)

function getIndexOf(str1, str2) {
    if (typeof(str1) != 'string' || typeof(str2) != 'string') {
        return `Value given to function was of Data Type: ${typeof(str1)}`;
    } else if (str1.length == 0 || str2.length == 0) {
        return 'String is empty';
    } else if (str1 && str2) {
        return str1.indexOf(str2);
    } else {
        return 'Function gave unexpected result: check arguments.';
    }
}

// Refactored code above
/* function getIndexOf(str1, str2) {
    if (str1 && str2 && (isNaN(str1)) && (isNaN(str2))) {
        return str1.indexOf(str2);
    } else if ((str1 && str2) && ((!isNaN(str1)) || (!isNaN(str2)))) {
        return "Value given to function was of Data Type: number";
    } else if (!str1 || !str2) {
        return "String is empty";
    } else {
        return "Something went wrong."
    }
} */

// .slice = returns selected elements 

function sliceString(str, num1, num2) {
    if (typeof(str) != 'string') {
        return `Value given to function was of Data Type: ${typeof(str)}`;
    } else if (typeof(num1) != 'number' || typeof(num2) != 'number') {
        return `Value given to the function for number parameters was of Data Type: ${typeof(num1)} and ${typeof(num2)}.`;
    } else if (str.length == 0) {
        return 'String is empty';
    } else if (str && (num1 || num1 == 0) && (num2 || num2 == 0)) {
        return str.slice(num1, num2);
    } else {
        return 'Function gave unexpected result: check arguments.';
    }
}

// Refactored code above
/* function sliceString(str, num1, num2) {
    if (str && (isNaN(str)) && !(isNaN(num1)) && !(isNaN(num2))) {
        return str.slice(num1, num2);
    } else if (str && (!isNaN(str))) {
        return "Value given to function was of Data Type: number";
    } else if (!str) {
        return "String is empty";
    } else {
        return "Something went wrong."
    }
} */

// .split = splits a string into an array of substrings

function splitString(str, separator) {
    if (typeof(str) != 'string') {
        return `Value given to function was of Data Type: ${typeof(str)}`;
    } else if (str.length == 0) {
        return 'String is empty';
    } else if (str && separator) {
        return str.split(separator);
    } else {
        return 'Function gave unexpected result: check arguments.';
    }
}

// Refactored code above
/* function splitString(str, separator) {
    if (str && separator && (isNaN(str))) {
        return str.split(separator);
    } else if (str && (!isNaN(str))) {
        return "Value given to function was of Data Type: number";
    } else if (!str) {
        return "String is empty";
    } else {
        return "Something went wrong."
    }
} */

// .toLowerCase = converts a string to lowercase letters

function convertToLowerCase(str) {
    if (typeof(str) != 'string') {
        return `Value given to function was of Data Type: ${typeof(str)}`;
    } else if (str.length == 0) {
        return 'String is empty';
    } else if (str) {
        return str.toLowerCase();
    } else {
        return 'Function gave unexpected result: check arguments.';
    }
}

// Refactored code above
/* function convertToLowerCase(str) {
    if (str && (isNaN(str))) {
        return str.toLowerCase();
    } else if (str && (!isNaN(str))) {
        return "Value given to function was of Data Type: number";
    } else if (!str) {
        return "String is empty";
    } else {
        return "Something went wrong."
    }
}
 */


// .toUpperCase = converts a string to uppercase letters

function convertToUpperCase(str) {
    if (typeof(str) != 'string') {
        return `Value given to function was of Data Type: ${typeof(str)}`;
    } else if (str.length == 0) {
        return 'String is empty';
    } else if (str) {
        return str.toUpperCase();
    } else {
        return 'Function gave unexpected result: check arguments.';
    }
}

// Refactored code above
/* function convertToUpperCase(str) {
    if (str && (isNaN(str))) {
        return str.toUpperCase();
    } else if (str && (!isNaN(str))) {
        return "Value given to function was of Data Type: number";
    } else if (!str) {
        return "String is empty";
    } else {
        return "Something went wrong."
    }
} */

// .trim = removes whitespace from both sides of a string

function trimString(str) {
    if (typeof(str) != 'string') {
        return `Value given to function was of Data Type: ${typeof(str)}`;
    } else if (str.length == 0) {
        return 'String is empty';
    } else if (str) {
        return str.trim();
    } else {
        return 'Function gave unexpected result: check arguments.';
    }
}

// Refactored code above
/* 
function trimString(str) {
    if (str && (isNaN(str))) {
        return str.trim();
    } else if (str && (!isNaN(str))) {
        return "Value given to function was of Data Type: number";
    } else if (!str) {
        return "String is empty";
    } else {
        return "Something went wrong."
    }
} */


// .replace = searches string for a value and replaces it with the second input

function replaceSubstring(str, strOld, strNew) {
    if (typeof(str) != 'string' || typeof(strOld) != 'string' || typeof(strNew) != 'string') {
        return `Value given to function was of Data Type: ${typeof(strOld)}`;
    } else if (str.length == 0) {
        return 'String is empty';
    } else if (str && strOld && strNew) {
        return str.replace(strOld, strNew);
    } else {
        return 'Function gave unexpected result: check arguments.';
    }
}

// Refactored code above
/* function replaceSubstring(str, strOld, strNew) {
    if (str && strOld && strNew && (isNaN(str)) && (isNaN(strOld)) && (isNaN(strNew))) {
        return str.replace(strOld, strNew);
    } else if (str && strOld && strNew && (!(isNaN(str)) || !(isNaN(strOld)) || !(isNaN(strNew)))) {
        return "Value given to function was of Data Type: number";
    } else if ((!(str)) || (!(strOld)) || (!(strNew))) {
        return "String is empty";
    } else {
        return "Something went wrong."
    }
} */



module.exports = {
    getCharAt,
    concatenateStrings,
    doesInclude,
    getIndexOf,
    sliceString,
    splitString,
    convertToLowerCase,
    convertToUpperCase,
    trimString,
    replaceSubstring
};