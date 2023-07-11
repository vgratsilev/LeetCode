export function licenseKeyFormatting(s: string, k: number): string {
    let raw = s.toUpperCase().split('-').join('');

    let result = '';
    let div = Math.floor(raw.length / k);
    let some = raw.length - div * k;
    let counter = 0;
    let i = some;

    while (counter <= div) {
        if (counter === 0) {
            result += raw.slice(counter, some);
        } else {
            result += `-${raw.slice(i, i + k)}`;
            i += k;
        }
        counter++;
    }

    if (result[0] === '-') {
        return result.slice(1, result.length);
    }
    return result;
}
