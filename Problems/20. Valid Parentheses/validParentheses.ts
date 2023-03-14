export const isValid = (s: string): boolean => {
    if(s.length % 2 !== 0 || s[0] === ']' || s[0] === ')' || s[0] === '}') {
        return false;
    }

    const brackets = [ s[0] ];

    for(let i = 1; i < s.length; i++) {
        const current = s[i];
        const j = brackets.length;

        if(current === '[' || current === '(' || current === '{') {
            brackets.push(current);
        } else {
            if(current === ')' && brackets[j - 1] === '(' || current === ']' && brackets[j - 1] === '[' || current === '}' && brackets[j - 1] === '{') {
                brackets.pop();
            } else {
                return false;
            }
        }
    }

    if(brackets.length === 0) {
        return true;
    }
    return false;
};
