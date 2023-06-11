export function isEmpty(obj: Record<string, any> | any[]): boolean {
    //return !Object.keys(obj).length;
    return Object.keys(obj).length === 0;
}

export function isEmpty2(obj: Record<string, any> | any[]): boolean {
    for(const _ in obj) {
        return false;
    }
    return true;
}
