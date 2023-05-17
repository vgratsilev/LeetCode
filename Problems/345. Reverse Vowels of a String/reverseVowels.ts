export function reverseVowels(s: string): string {
    const vowels = {
        'a': 1,
        'e': 1,
        'i': 1,
        'o': 1,
        'u': 1,
        'A': 1,
        'E': 1,
        'I': 1,
        'O': 1,
        'U': 1
    };

    const arr = s.split('');
    let start = 0;
    let end = arr.length - 1;

    while(start < end) {
        // @ts-ignore
        if(vowels[arr[start]] && vowels[arr[end]]) {
            [ arr[start], arr[end] ] = [ arr[end], arr[start] ];
            start++;
            end--;
        } else { // @ts-ignore
            if(vowels[arr[start]]) {
                end--;
            } else {
                start++;
            }
        }
    }
    return arr.join('');
}

export function reverseVowelsRegex(s: string): string {
    const vowels = s.split('').filter(a => /[aeiou]/i.test(a));
    return s.split(/[aeiou]/i).reduce((res, a) => res + a + (vowels.pop() || ''), '');
}
