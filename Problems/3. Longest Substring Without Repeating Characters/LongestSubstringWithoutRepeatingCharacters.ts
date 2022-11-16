export const lengthOfLongestSubstring = (s: string): number => {
    let maxLen = 0;
    const chars = new Map();
    let start = 0;

    for (let i = 0; i < s.length; i++) {
        if (chars.has(s[i])) {
            start = Math.max(chars.get(s[i]) + 1, start);
        }
        chars.set(s[i], i);
        maxLen = Math.max(i - start + 1, maxLen);
    }

    return maxLen;
};
