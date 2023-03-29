export const longestValidParentheses = (s: string): number => {
    if(s.length < 2) {
        return 0;
    }

    let maxCount = 0;
    const indexStack: number[] = [ -1 ]; // -1 to handle ()() solutions
    const bracketsStack: string[] = [];

    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(') {
            indexStack.push(i);
            bracketsStack.push(s[i]);
        } else {
            if(bracketsStack.at(-1) === '(') {
                indexStack.pop();
                bracketsStack.pop();
                // @ts-ignore
                if(maxCount < i - indexStack.at(-1)) {
                    // @ts-ignore
                    maxCount = i - indexStack.at(-1);
                }
            } else {
                indexStack.push(i);
            }
        }
    }

    return maxCount;
};
