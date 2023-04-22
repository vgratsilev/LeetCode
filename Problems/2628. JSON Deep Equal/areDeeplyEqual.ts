export function areDeeplyEqual(o1: any, o2: any): boolean {
    if(o1 === o2) {
        return true;
    }

    if(typeof o1 !== 'object' || o1 === null || typeof o2 !== 'object' || o2 === null) {
        return false;
    }

    if(Array.isArray(o1) !== Array.isArray(o2)) {
        return false;
    }
    const keysO1 = Object.keys(o1);
    const keysO2 = Object.keys(o2);

    if(keysO1.length !== keysO2.length) {
        return false;
    }

    return keysO1.every((key) => keysO2.includes(key) && areDeeplyEqual(o1[key], o2[key]));
}
