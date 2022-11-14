import { addTwoNumbers, ListNode } from './AddTwoNumbers';

function createLinkedList(arr: number[]): ListNode | null {
    return arr.reduceRight<ListNode | null>((next, value) => {
        if (next === null) {
            next = new ListNode(value);
        } else {
            next = new ListNode(value, next);
        }
        return next;
    }, null);
}

describe('2. Add Two Numbers', () => {
    test('Example 1', () => {
        const l1: ListNode = new ListNode(2, new ListNode(4, new ListNode(3, null)));
        const l2: ListNode = new ListNode(5, new ListNode(6, new ListNode(4, null)));
        const result: ListNode = new ListNode(7, new ListNode(0, new ListNode(8, null)));

        expect(addTwoNumbers(l1, l2)).toEqual(result);
    });

    test('Example 2', () => {
        const l1: ListNode = new ListNode(0, null);
        const l2: ListNode = new ListNode(0, null);
        const result: ListNode = new ListNode(0, null);

        expect(addTwoNumbers(l1, l2)).toEqual(result);
    });

    test('Example 3', () => {
        const l1: ListNode | null = createLinkedList([9, 9, 9, 9, 9, 9, 9]);
        const l2: ListNode | null = createLinkedList([9, 9, 9, 9]);
        const result: ListNode | null = createLinkedList([8, 9, 9, 9, 0, 0, 0, 1]);

        expect(addTwoNumbers(l1, l2)).toEqual(result);
    });
});

