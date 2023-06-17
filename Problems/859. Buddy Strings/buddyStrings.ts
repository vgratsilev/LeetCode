export function buddyStrings(s: string, goal: string): boolean {
    let len = s.length;
    if(len !== goal.length) {
        return false;
    }

    let arr = [];
    let set = new Set();

    for(let i = 0; i < len; i++) {
        set.add(s[i]);
        if(s[i] !== goal[i]) {
            arr.push([ s[i], goal[i] ]);
        }
    }

    if(arr.length === 0) {
        if(len > set.size) {
            return true;
        }
    }

    if(arr.length === 2) {
        if(arr[0].join('') === arr[1].reverse().join('')) {
            return true;
        }
    }

    return false;
}
