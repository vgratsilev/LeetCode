/**
 * Time complexity O(n)
 * Space complexity O(n)
 */
export function wordPattern(pattern: string, s: string): boolean {
    const patternMap: Map<string, number> = new Map<string, number>();
    const sMap: Map<string, number> = new Map<string, number>();
    const sSplit = s.split(" ");

    if (pattern.length !== sSplit.length) {
        return false;
    }

    for (let i = 0; i < pattern.length; i++) {
        if (!patternMap.has(pattern[i])) {
            patternMap.set(pattern[i], i);
        }
        if (!sMap.has(sSplit[i])) {
            sMap.set(sSplit[i], i);
        }
    }

    for (let i = 0; i < pattern.length; i++) {
        if (sMap.get(sSplit[i])! !== patternMap.get(pattern[i])) {
            return false;
        }
    }

    return true;
}
