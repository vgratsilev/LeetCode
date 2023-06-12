export function join(arr1: any[], arr2: any[]): any[] {
    let i = 0;
    let j = 0;
    let n = arr1.length;
    let m = arr2.length;

    let id1: number;
    let id2: number;

    let el1;
    let el2;

    let w = 0;

    const result = Array(n + m);

    // parsing arr1 and arr2
    while(i < n && j < m) {
        el1 = arr1[i];
        el2 = arr2[j];

        id1 = el1.id;
        id2 = el2.id;


        if(id1 === id2) {
            // first case: same id
            result[w++] = { ...el1, ...el2 };
            i++;
            j++;
        } else if(id1 < id2) {
            // second case: id1 is lower
            result[w++] = el1;
            i++;
        } else {
            // third case: id2 is lower
            result[w++] = el2;
            j++;
        }
    }

    // leftovers
    while(i < n) {
        result[w++] = arr1[i++];
    }

    while(j < m) {
        result[w++] = arr2[j++];
    }

    // resizing res
    result.length = w;

    return result;
}
