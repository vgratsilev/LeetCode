export class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

/**
 * Iteration
 * Time complexity: o(m+n)
 * Space complexity: o(1)
 */
export const mergeTwoListsIteration = (list1: ListNode | null, list2: ListNode | null): ListNode | null => {
    if(list1 === null && list2 === null) {
        return null;
    }

    if(list1 === null) {
        return list2;
    }

    if(list2 === null) {
        return list1;
    }

    const head = new ListNode();
    let tail = head;

    while(list1 !== null && list2 !== null) {
        if(list1.val < list2.val) {
            tail.next = list1;
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }

        tail = tail.next;
    }

    tail.next = list1 === null ? list2 : list1;

    return head.next;
};

/**
 * Recursion
 * Time complexity: O(m+n)
 * Space complexity: O(m+n)
 */
export const mergeTwoListsRecursion = (list1: ListNode | null, list2: ListNode | null): ListNode | null => {
    if(list1 === null && list2 === null) {
        return null;
    }

    if(list1 === null) {
        return list2;
    }

    if(list2 === null) {
        return list1;
    }

    let head;

    if(list1.val < list2.val) {
        head = list1;
        list1 = list1.next;
    } else {
        head = list2;
        list2 = list2.next;
    }


    head.next = mergeTwoListsRecursion(list1, list2);

    return head;
};
