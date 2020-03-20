// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:

// Input: "()"
// Output: true
// Example 2:

// Input: "()[]{}"
// Output: true
// Example 3:

// Input: "(]"
// Output: false
// Example 4:

// Input: "([)]"
// Output: false
// Example 5:

// Input: "{[]}"
// Output: true

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = [];
  let object = {
    "[": "]",
    "(": ")",
    "{": "}"
  };
  let openBrackets = ["[", "(", "{"];
  let closedBrackets = ["]", ")", "}"];
  let str = s.split(" ").join("");
  let removing = 0;
  for (let i = 0; i < str.length; i++) {
    if (openBrackets.includes(str.charAt(i)) && removing == 0) {
      stack.push(str.charAt(i));
    } else if (closedBrackets.includes(str.charAt(i))) {
      let popped = stack.pop;
      removing = 1;
      if (object[popped] != str.charAt(i)) {
        return 0;
      }
    }
  }
  if (stack.length > 0) {
    return 0;
  }
  return 1;
};
