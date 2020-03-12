// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
  function ListNode(val) {
    this.val = val;
    this.next = null;
  }

  let num1 = [];
  let num2 = [];

  while (l1) {
    num1.unshift(l1.val);
    l1 = l1.next;
  }

  while (l2) {
    num2.unshift(l2.val);
    l2 = l2.next;
  }

  let total = Number(num1.join("")) + Number(num2.join(""));
  total = total.toString();
  total = total
    .split("")
    .reverse()
    .join("");
  total = Array.from(String(total), Number);

  let head = new ListNode(total[0]);
  let node = head;

  for (let i = 1; i < total.length; i++) {
    node.next = new ListNode(total[i]);
    node = node.next;
  }

  return head;
};
