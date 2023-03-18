import { ListNode, mergeTwoListsIteration, mergeTwoListsRecursion } from './mergeTwoLists';

function createLinkedList(arr: number[]): ListNode | null {
    return arr.reduceRight<ListNode | null>((next, value) => {
        if(next === null) {
            next = new ListNode(value);
        } else {
            next = new ListNode(value, next);
        }
        return next;
    }, null);
}

type ListNodeType = ListNode | null

describe('21. Merge Two Sorted Lists', () => {
    test('Iteration. Example 1', () => {
        const list1: ListNodeType = createLinkedList([ 1, 2, 4 ]);
        const list2: ListNodeType = createLinkedList([ 1, 3, 4 ]);
        const result: ListNodeType = createLinkedList([ 1, 1, 2, 3, 4, 4 ]);
        expect(mergeTwoListsIteration(list1, list2)).toEqual(result);
    });

    test('Iteration. Example 2', () => {
        const list1: ListNodeType = createLinkedList([]);
        const list2: ListNodeType = createLinkedList([]);
        const result: ListNodeType = createLinkedList([]);
        expect(mergeTwoListsIteration(list1, list2)).toEqual(result);
    });

    test('Iteration. Example 3', () => {
        const list1: ListNodeType = createLinkedList([]);
        const list2: ListNodeType = createLinkedList([ 0 ]);
        const result: ListNodeType = createLinkedList([ 0 ]);
        expect(mergeTwoListsIteration(list1, list2)).toEqual(result);
    });

    test('Recursion. Example 1', () => {
        const list1: ListNodeType = createLinkedList([ 1, 2, 4 ]);
        const list2: ListNodeType = createLinkedList([ 1, 3, 4 ]);
        const result: ListNodeType = createLinkedList([ 1, 1, 2, 3, 4, 4 ]);
        expect(mergeTwoListsRecursion(list1, list2)).toEqual(result);
    });

    test('Recursion. Example 2', () => {
        const list1: ListNodeType = createLinkedList([]);
        const list2: ListNodeType = createLinkedList([]);
        const result: ListNodeType = createLinkedList([]);
        expect(mergeTwoListsRecursion(list1, list2)).toEqual(result);
    });

    test('Recursion. Example 3', () => {
        const list1: ListNodeType = createLinkedList([]);
        const list2: ListNodeType = createLinkedList([ 0 ]);
        const result: ListNodeType = createLinkedList([ 0 ]);
        expect(mergeTwoListsRecursion(list1, list2)).toEqual(result);
    });
});
