// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
// Note:

// All given inputs are in lowercase letters a-z.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length <= 0) {
    return "";
  }
  if (strs.length == 1) {
    return strs[0];
  }
  let prefix = Array.from(strs[0]);
  for (let i = 1; i < strs.length; i++) {
    let word = strs[i];
    if (word.length == 0) {
      return "";
    }
    for (let j = 0; j < word.length; j++) {
      if (word.charAt(0) != prefix[0]) {
        return "";
      }
      if (word.charAt(j) != prefix[j]) {
        prefix.length = j;
        break;
      }
      if (j + 1 == word.length && prefix.length > word.length) {
        prefix.length = word.length;
        break;
      }
    }
  }
  return prefix.join("");
};
