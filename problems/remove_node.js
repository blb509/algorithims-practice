// Write a function that receives as input the head node of a linked list and an integer

// k. Your function should remove the kth node from the end of the linked list and return the head node of the

// updated list.

function removeKthLinkedListNode(head, k) {
  let length = 0;
  let start = head;
  while (start != null) {
    length++;
    start = start.next;
  }
  let toDelete = length - k;
  if (toDelete < 0) {
    return head;
  }
  if (toDelete == 0) {
    head = head.next;
    return head;
  }
  let curr = head;
  for (let i = 0; i < toDelete; i++) {
    if (i + 1 == toDelete) {
      curr.next = curr.next.next;
      return head;
    } else {
      curr = curr.next;
    }
  }
}
