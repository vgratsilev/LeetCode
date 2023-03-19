export const longestPalindrome = (s: string): string => {
    if(!s || s.length <= 1) {
        return s;
    }

    let longestPalindrome = '';
    let curString = '';

    const expand = (s: string, left: number, right: number): string => {
        while(left >= 0 && right <= s.length && s[left] === s[right]) {
            left -= 1;
            right += 1;
        }
        return s.substring(left + 1, right);
    };

    for(let i = 0; i < s.length; i++) {
        let oddString = expand(s, i, i);
        let evenString = expand(s, i, i + 1);
        curString = oddString.length > evenString.length ? oddString : evenString;
        longestPalindrome = longestPalindrome.length > curString.length ? longestPalindrome : curString;
    }

    return longestPalindrome;
};
