export const isPalindrome = (s: string): boolean => {
    let str = s.trim();
    if(str === '') {
        return true;
    }

    str = str.toLowerCase().replace(/[^a-z0-9]/gi, '');

    return str === str.split('').reverse().join('');
};
