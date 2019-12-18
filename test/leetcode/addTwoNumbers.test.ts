/**
 * @name addTwoNumbers.test
 * @description addTwoNumbers.js的测试文件
 */

const expect = require('chai').expect;
const { ListNode, addTwoNumbers } = require('../../leetcode/addTwoNumbers.ts');

describe('test addTwoNumbers.ts', function() {
  it('test addTwoNumbers.ts correct not exceed 10', () => {
    const p1 = new ListNode(2);
    p1.next = new ListNode(3);
    p1.next.next = new ListNode(4);
    const p2 = new ListNode(2);
    p2.next = new ListNode(3);
    p2.next.next = new ListNode(4);
    const expectResult = new ListNode(4);
    expectResult.next = new ListNode(6);
    expectResult.next.next = new ListNode(8);
    expect(JSON.stringify(addTwoNumbers(p1, p2))).to.equal(JSON.stringify(expectResult));
  });
  it('test addTwoNumbers.ts correct not exceed 10 another situation 1', () => {
    const p1 = new ListNode(2);
    p1.next = new ListNode(3);
    p1.next.next = new ListNode(4);
    const p2 = new ListNode(2);
    p2.next = new ListNode(3);
    const expectResult = new ListNode(4);
    expectResult.next = new ListNode(6);
    expectResult.next.next = new ListNode(4);
    expect(JSON.stringify(addTwoNumbers(p1, p2))).to.equal(JSON.stringify(expectResult));
  });
  it('test addTwoNumbers.ts correct not exceed 10 another situation 2', () => {
    const p1 = new ListNode(2);
    p1.next = new ListNode(3);
    const p2 = new ListNode(2);
    p2.next = new ListNode(3);
    p2.next.next = new ListNode(4);
    const expectResult = new ListNode(4);
    expectResult.next = new ListNode(6);
    expectResult.next.next = new ListNode(4);
    expect(JSON.stringify(addTwoNumbers(p1, p2))).to.equal(JSON.stringify(expectResult));
  });
  it('test addTwoNumbers.ts correct exceed 10', () => {
    const p1 = new ListNode(2);
    p1.next = new ListNode(3);
    p1.next.next = new ListNode(4);
    const p2 = new ListNode(2);
    p2.next = new ListNode(3);
    p2.next.next = new ListNode(6);
    const expectResult = new ListNode(4);
    expectResult.next = new ListNode(6);
    expectResult.next.next = new ListNode(0);
    expectResult.next.next.next = new ListNode(1);
    expect(JSON.stringify(addTwoNumbers(p1, p2))).to.equal(JSON.stringify(expectResult));
  });
  it('test addTwoNumbers.ts correct exceed 10 another', () => {
    const p1 = new ListNode(2);
    p1.next = new ListNode(3);
    p1.next.next = new ListNode(4);
    const p2 = new ListNode(2);
    p2.next = new ListNode(7);
    p2.next.next = new ListNode(4);
    const expectResult = new ListNode(4);
    expectResult.next = new ListNode(0);
    expectResult.next.next = new ListNode(9);
    expect(JSON.stringify(addTwoNumbers(p1, p2))).to.equal(JSON.stringify(expectResult));
  });
});
