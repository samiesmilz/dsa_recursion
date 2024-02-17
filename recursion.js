/** product: calculate the product of an array of numbers. */

function product(nums, prod = 1, i = 0) {
  // Base Case
  if (nums.length === i) return prod;
  // Multiply current item with prod
  prod = nums[i] * prod;
  //Recursion
  return product(nums, prod, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, wordLength = 0, i = 0) {
  if (words.length === i) return wordLength;
  if (words[i].length > wordLength) {
    wordLength = words[i].length;
  }
  return longest(words, wordLength, i + 1);
}

/** everyOther: return a string with every other letter. */

// function everyOther(str, wrd = "", i = 0) {
//   if (i >= str.length) return wrd;
//   wrd = wrd + str[i];
//   return everyOther(str, wrd, i + 2);
// }

function everyOther(str, wrd = [], i = 0) {
  if (i >= str.length) {
    return wrd.join("");
  }
  wrd.push(str[i]);
  return everyOther(str, wrd, i + 2);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, wrd = [], i = str.length - 1) {
  if (i < 0) {
    return wrd.join("") === str;
  }
  wrd.push(str[i]);
  return isPalindrome(str, wrd, i - 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  // Base case: If index is equal to array length, value not found
  if (i === arr.length) {
    return -1; // Return -1 to indicate value not found
  }
  // Check if current element equals the value
  if (arr[i] === val) {
    return i; // Return the index if value is found
  }

  // Recursive call with next index
  return findIndex(arr, val, i + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  // Base case: if the string is empty or has only one character, return the string itself
  if (str.length <= 1) {
    return str;
  }
  // Recursive call: reverse the substring excluding the first character,
  // then concatenate the first character to the end of the reversed substring
  return revString(str.substring(1)) + str[0];
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let strings = [];

  for (let key in obj) {
    if (typeof obj[key] === "string") {
      strings.push(obj[key]);
    } else if (typeof obj[key] === "object") {
      // Recursively call gatherStrings if the value is an object
      strings = strings.concat(gatherStrings(obj[key]));
    }
  }
  return strings;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, start = 0, end = arr.length - 1) {
  // Base case: if start index exceeds end index, value not found
  if (start > end) {
    return -1;
  }

  // Calculate the midpoint index
  let mid = Math.floor((start + end) / 2);

  // Compare the value at the midpoint with the target value
  if (arr[mid] === val) {
    return mid; // Target value found, return its index
  } else if (val < arr[mid]) {
    // If val is less than the value at mid, search left half
    return binarySearch(arr, val, start, mid - 1);
  } else {
    // If val is greater than the value at mid, search right half
    return binarySearch(arr, val, mid + 1, end);
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
