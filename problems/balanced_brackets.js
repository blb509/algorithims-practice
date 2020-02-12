// Write a function that takes a string as input. The string can contain four types of brackets: "[]", "()", "{}", and "||".

// Your function should return a boolean indicating wether or not the string is balanced.

function balancedBrackets(string) {
  let stack = [];
  let object = {
    "[": "]",
    "(": ")",
    "{": "}",
    "|": "|"
  };
  let openBrackets = ["[", "(", "{", "|"];
  let closedBrackets = ["]", ")", "}", "|"];
  let str = string.split(" ").join("");
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
}
