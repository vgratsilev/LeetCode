const romanMap = new Map([
    [ 'I', 1 ],
    [ 'V', 5 ],
    [ 'X', 10 ],
    [ 'L', 50 ],
    [ 'C', 100 ],
    [ 'D', 500 ],
    [ 'M', 1000 ]
]);

export const romanToInt = (s: string): number => {
    const roman = s.split('').reverse();
    let last = 'I';
    const integers = roman.map(current => {
        // @ts-ignore
        if(romanMap.get(current) < romanMap.get(last)) {
            // @ts-ignore
            return -romanMap.get(current);
        }
        const int = romanMap.get(current);
        last = current;
        return int;
    });
    // @ts-ignore
    return integers.reduce((a, b) => a + b, 0);
};
