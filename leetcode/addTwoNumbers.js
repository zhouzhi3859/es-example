/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
const addTwoNumbers = function(l1, l2, isExceed10 = false) {
  let node = null;
  if (l1 || l2) {
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;
    const val = isExceed10 ? val1 + val2 + 1 : val1 + val2;
    node = new ListNode(val % 10);
    node.next = addTwoNumbers(l1 ? l1.next : null, l2 ? l2.next : null, val >= 10);
  } else if (isExceed10) {
    node = new ListNode(1);
    node.next = null;
  }
  return node;
};

module.exports = {
  ListNode,
  addTwoNumbers,
};
