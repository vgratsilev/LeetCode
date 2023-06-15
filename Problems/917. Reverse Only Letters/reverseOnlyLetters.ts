export function reverseOnlyLetters(s: string): string {
    const chars = s.split('');

    let start = 0;
    let end = chars.length - 1;

    while(start < end) {
        if(chars[start].toLowerCase() === chars[start].toUpperCase()) {
            ++start;
        } else if(chars[end].toLowerCase() === chars[end].toUpperCase()) {
            --end;
        } else {
            [ chars[start], chars[end] ] = [ chars[end], chars[start] ];
            ++start;
            --end;
        }
    }
    return chars.join('');
}
