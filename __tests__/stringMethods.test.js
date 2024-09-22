const { 
    getCharAt, concatenateStrings, doesInclude, getIndexOf, 
    sliceString, splitString, convertToLowerCase, convertToUpperCase, 
    trimString, replaceSubstring 
  } = require('../src/stringMethods');
  
  test.each([
    // getCharAt tests (valid and invalid)
    ['getCharAt', getCharAt, 'hello', 1, 'e'],
    ['getCharAt', getCharAt, 12345, 1, 'Value given to function was of Data Type: number'],
    ['getCharAt', getCharAt, '', 1, 'String is empty'],
  
    // concatenateStrings tests (valid and invalid)
    ['concatenateStrings', concatenateStrings, 'hello', 'world', 'helloworld'],
    ['concatenateStrings', concatenateStrings, 12345, 'world', 'Value given to function was of Data Type: number'],
    
    // doesInclude tests (valid and invalid)
    ['doesInclude', doesInclude, 'hello world', 'world', true],
    ['doesInclude', doesInclude, 'hello world', 123, 'Value given to function was of Data Type: number'],
    ['doesInclude', doesInclude, '', 'world', 'String is empty'],
  
    // getIndexOf tests (valid and invalid)
    ['getIndexOf', getIndexOf, 'hello world', 'world', 6],
    ['getIndexOf', getIndexOf, 12345, 'world', 'Value given to function was of Data Type: number'],
    ['getIndexOf', getIndexOf, '', 'world', 'String is empty'],
  
    // sliceString tests (valid and invalid)
    ['sliceString', sliceString, 'hello world', 0, 5, 'hello'],
    ['sliceString', sliceString, 12345, 0, 5, 'Value given to function was of Data Type: number'],
    ['sliceString', sliceString, '', 0, 5, 'String is empty'],
  
    /* // splitString tests (valid and invalid)
    ['splitString', splitString, 'hello world', ' ', ['hello', 'world']],
    ['splitString', splitString, 12345, ' ', 'Value given to function was of Data Type: number'],
    ['splitString', splitString, '', ' ', 'String is empty'], */
  
    /* // convertToLowerCase tests (valid and invalid)
    ['convertToLowerCase', convertToLowerCase, 'HELLO', null, 'hello'],
    ['convertToLowerCase', convertToLowerCase, 12345, null, 'Value given to function was of Data Type: number'],
    ['convertToLowerCase', convertToLowerCase, '', null, 'String is empty'], */
  
    /* // convertToUpperCase tests (valid and invalid)
    ['convertToUpperCase', convertToUpperCase, 'hello', null, 'HELLO'],
    ['convertToUpperCase', convertToUpperCase, 12345, null, 'Value given to function was of Data Type: number'],
    ['convertToUpperCase', convertToUpperCase, '', null, 'String is empty'], */
  
    /* // trimString tests (valid and invalid)
    ['trimString', trimString, '  hello  ', null, 'hello'],
    ['trimString', trimString, 12345, null, 'Value given to function was of Data Type: number'], */
  
    /* // replaceSubstring tests (valid and invalid)
    ['replaceSubstring', replaceSubstring, 'hello world', 'world', 'everyone', 'hello everyone'],
    ['replaceSubstring', replaceSubstring, 'hello world', 123, 'everyone', 'Value given to function was of Data Type: number'],
    ['replaceSubstring', replaceSubstring, '', 'world', 'everyone', 'String is empty'] */
  ])('%s - should return %s for inputs (%s)', (name, func, ...params) => {
    
    const expectedResult = params.pop(); // Extract expected result from the last parameter
    
    if (Array.isArray(expectedResult)) {
        expect(func(...params)).toStrictEqual(expectedResult);  // Use .toStrictEqual for arrays
      } else {
        expect(func(...params)).toBe(expectedResult);  // Use .toBe for primitive types (numbers, strings)
      }
  });
  