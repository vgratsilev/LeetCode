const kRows = [
    new Set('qwertyuiop'),
    new Set('asdfghjkl'),
    new Set('zxcvbnm')
];

export function findWords(words: string[]): string[] {
    return words.filter((word) => {
        const chars = word.toLowerCase().split('');
        return kRows.some((row) => chars.every((c) => row.has(c)));
    });
}

export function findWords2(words: string[]): string[] {
    return words.filter(word => {
        const letters = [ ...new Set(word.toLowerCase().split('')) ];
        return letters.every(l => 'qwertyuiop'.indexOf(l) !== -1) ||
            letters.every(l => 'asdfghjkl'.indexOf(l) !== -1) ||
            letters.every(l => 'zxcvbnm'.indexOf(l) !== -1);
    });
}

