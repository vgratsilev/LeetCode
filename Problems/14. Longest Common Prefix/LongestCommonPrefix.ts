export const longestCommonPrefix = (strs: string[]): string => {
    if(strs.length === 1) {
        return strs[0];
    }

    let commonPrefix = '';

    for(let i = 0; i < strs[0].length; i++) {
        commonPrefix = strs[0].slice(0, i);
        if(!strs.every((str) => str.startsWith(commonPrefix))) {
            commonPrefix = commonPrefix.slice(0, -1);
            break;
        }
    }

    return commonPrefix;
};
