/**
 * Definition for singly-linked list.
 *
 */
export class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

export const addTwoNumbers = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
    let overflow = 0;
    let current = new ListNode(undefined);
    let result = current;

    while (l1 !== null || l2 !== null || overflow > 0) {
        let sum = overflow;
        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }

        overflow = Math.floor(sum / 10);
        current.next = new ListNode(Math.floor(sum % 10));
        current = current.next;
    }
    return result.next;
};
