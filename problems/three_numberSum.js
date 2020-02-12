// Write a function that takes in a non - empty array of distinct integers and a target integer. Your function

// should find all triplets in the array that sum up to the target sum and return a two dimensional array

// of all these triplets. Each inner array containing a single triplet should be sorted in ascending order.

function threeNumberSum(arr, target) {
  if (arr.length < 3) {
    return [];
  }
  arr.sort((a, c) => a - b);
  let output = [];
  for (let i = 0; i <= arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      let sum = arr[i] + arr[left] + arr[right];
      if (sum > target) {
        right--;
      } else if (sum < target) {
        left++;
      } else {
        output.push([arr[i], arr[left], arr[right]]);
        left++;
        right--;
      }
    }
  }
  return output;
}
