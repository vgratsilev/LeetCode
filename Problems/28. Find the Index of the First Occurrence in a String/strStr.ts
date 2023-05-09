export function strStr(haystack: string, needle: string): number {
    // // build in solution
    // if(!needle.length) return 0;
    // if(!haystack.includes(needle)) return -1;
    // return haystack.split(`${needle}`)[0].length;

    // own
    if(needle === '' || needle === haystack) return 0;
    if(haystack.length < needle.length) return -1;

    for(let i = 0; i < haystack.length - needle.length + 1; i++) {
        if(haystack[i] === needle[0]) {
            for(let j = 0; j < needle.length; j++) {
                if(needle[j] !== haystack[i + j]) {
                    break;
                } else if(j === needle.length - 1) {
                    return i;
                }
            }
        }
    }
    
    return -1;
}
