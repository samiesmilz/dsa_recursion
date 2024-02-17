# Recursive Function Toolkit

This toolkit provides a collection of recursive functions for various operations on data structures such as arrays, strings, and objects. These functions are implemented using recursion, a powerful technique for solving problems by breaking them down into smaller, more manageable subproblems.

## Functions

### 1. `product`

- **Description**: Calculates the product of an array of numbers.
- **Function Signature**: `product(nums: Array<number>, prod: number = 1, i: number = 0): number`
- **Parameters**:
  - `nums`: An array of numbers.
  - `prod`: (Optional) Initial value for the product calculation.
  - `i`: (Optional) Index used for recursion.
- **Usage**:

  ```javascript
  const { product } = require("./recursive-functions");

  const result = product([1, 2, 3, 4]); // Returns 24
  ```

### 2. `longest`

- **Description**: Returns the length of the longest word in an array of words.
- **Function Signature**: `longest(words: Array<string>, wordLength: number = 0, i: number = 0): number`
- **Parameters**:
  - `words`: An array of words.
  - `wordLength`: (Optional) Initial value for the longest word length.
  - `i`: (Optional) Index used for recursion.
- **Usage**:

  ```javascript
  const { longest } = require("./recursive-functions");

  const words = ["apple", "banana", "orange", "strawberry"];
  const result = longest(words); // Returns 11 (length of 'strawberry')
  ```

### 3. `everyOther`

- **Description**: Returns a string with every other letter.
- **Function Signature**: `everyOther(str: string, wrd: Array<string> = [], i: number = 0): string`
- **Parameters**:
  - `str`: The input string.
  - `wrd`: (Optional) Array used to accumulate every other letter.
  - `i`: (Optional) Index used for recursion.
- **Usage**:

  ```javascript
  const { everyOther } = require("./recursive-functions");

  const result = everyOther("hello"); // Returns 'hlo'
  ```

### 4. `isPalindrome`

- **Description**: Checks whether a string is a palindrome or not.
- **Function Signature**: `isPalindrome(str: string, wrd: Array<string> = [], i: number = str.length - 1): boolean`
- **Parameters**:
  - `str`: The input string.
  - `wrd`: (Optional) Array used to accumulate characters.
  - `i`: (Optional) Index used for recursion.
- **Usage**:

  ```javascript
  const { isPalindrome } = require("./recursive-functions");

  const result = isPalindrome("racecar"); // Returns true
  ```

### 5. `findIndex`

- **Description**: Returns the index of a value in an array (or -1 if the value is not present).
- **Function Signature**: `findIndex(arr: Array<any>, val: any, i: number = 0): number`
- **Parameters**:
  - `arr`: The input array.
  - `val`: The value to search for.
  - `i`: (Optional) Index used for recursion.
- **Usage**:

  ```javascript
  const { findIndex } = require("./recursive-functions");

  const arr = [1, 2, 3, 4, 5];
  const result = findIndex(arr, 3); // Returns 2
  ```

### 6. `revString`

- **Description**: Returns a copy of a string, but in reverse.
- **Function Signature**: `revString(str: string): string`
- **Parameters**:
  - `str`: The input string.
- **Usage**:

  ```javascript
  const { revString } = require("./recursive-functions");

  const result = revString("hello"); // Returns 'olleh'
  ```

### 7. `gatherStrings`

- **Description**: Given an object, returns an array of all string values.
- **Function Signature**: `gatherStrings(obj: Object): Array<string>`
- **Parameters**:
  - `obj`: The input object.
- **Usage**:

  ```javascript
  const { gatherStrings } = require("./recursive-functions");

  const obj = {
    name: "John",
    age: 30,
    address: {
      city: "New York",
      country: "USA",
    },
    hobbies: ["reading", "traveling"],
  };

  const result = gatherStrings(obj); // Returns ['John', 'New York', 'USA', 'reading', 'traveling']
  ```

### 8. `binarySearch`

- **Description**: Given a sorted array of numbers and a value, returns the index of that value (or -1 if the value is not present).
- **Function Signature**: `binarySearch(arr: Array<number>, val: number, start: number = 0, end: number = arr.length - 1): number`
- **Parameters**:
  - `arr`: The sorted array of numbers.
  - `val`: The value to search for.
  - `start`: (Optional) Start

index for the search range.

- `end`: (Optional) End index for the search range.
- **Usage**:

  ```javascript
  const { binarySearch } = require("./recursive-functions");

  const arr = [1, 2, 3, 4, 5];
  const result = binarySearch(arr, 3); // Returns 2
  ```

---

These recursive functions provide efficient solutions to common problems in JavaScript programming. Feel free to use them in your projects and explore the fascinating world of recursion!
