// Given an array of strings, group anagrams together.

// Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// Note:

// All inputs will be in lowercase.
// The order of your output does not matter.

var groupAnagrams = function(strs) {
  // make object to store anagrams
  let groupedAnagrams = {};
  for (i = 0; i <= strs.length - 1; i++) {
    // make a copy of word and sort it
    let toSort = strs[i];
    toSort = toSort.split("");
    toSort = toSort.sort();
    toSort = toSort.join("");
    let sortedWord = toSort;
    // if there is already a key with the sorted anagram add word to values
    if (groupedAnagrams[sortedWord]) {
      let toPush = strs[i];
      groupedAnagrams[sortedWord].push(toPush);
      // if key is not made yet make it and add array with the unsorted word
    } else {
      groupedAnagrams[sortedWord] = [strs[i]];
    }
  }

  return Object.values(groupedAnagrams);
};
