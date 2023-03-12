export const longestCommonPrefix = (strs: string[]): string => {
    if(strs.length === 1) {
        return strs[0];
    }

    let commonPrefix = '';

    for(let i = 0; i <= strs[0].length; i++) {
        const tmp = strs[0].slice(0, i);
        if(!strs.every((str) => str.startsWith(tmp))) {
            break;
        }

        commonPrefix = tmp;
    }

    return commonPrefix;
};
