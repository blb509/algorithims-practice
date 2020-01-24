// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Example:

// Input:  [1,2,3,4]
// Output: [24,12,8,6]
// Note: Please solve it without division and in O(n).

// Follow up:
// Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)

var productExceptSelf = function(nums) {
  // array where we will be pushing answers
  let output = new Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    // copy array
    let copy = nums.slice();
    // take out number
    copy.splice(i, 1);
    // multiply rest of numbers
    let toOutput = copy.reduce((a, b) => a * b);
    // add to output array
    output.splice(i, 1, toOutput);
  }
  return output;
};
