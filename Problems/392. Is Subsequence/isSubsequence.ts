export function isSubsequence(s: string, t: string): boolean {
    const counter = t.split('').reduce<number>((acc, el) => s[acc] === el ? acc += 1 : acc, 0);

    return counter === s.length;
}

export function isSubsequence2(s: string, t: string): boolean {
    let counter = 0;

    for (let i = 0; i < t.length; i++) {
        if (s[counter] === t[i]) {
            counter++;
        }
    }

    return counter === s.length;
}
