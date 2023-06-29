export function longestPalindrome(s: string): number {
    const letters = new Map<string, number>();
    let doubles = 0;

    for (let i = 0; i < s.length; i++) {
        if (letters.get(s[i])) {
            doubles += 1;
            letters.set(s[i], 0);
            continue;
        }
        letters.set(s[i], 1);
    }

    if (s.length === doubles * 2) {
        return doubles * 2;
    }

    return doubles * 2 + 1;
}
