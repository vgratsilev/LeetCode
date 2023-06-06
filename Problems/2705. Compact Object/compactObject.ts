type Obj = Record<any, any>;

export function compactObject(obj: Obj): Obj {
    if(typeof obj !== 'object' || obj === null) {
        return obj;
    }

    // obj is an array
    if(Array.isArray(obj)) return obj.reduce((acc, iter) => {
        if(!iter) {
            return acc;
        }
        acc = [ ...acc, compactObject(iter) ];
        return acc;
    }, []);

    // obj is an ordinary object
    return Object.entries(obj).reduce((acc, [ key, val ]) => {
        if(val) {
            acc = { ...acc, [key]: compactObject(val) };
        }
        return acc;
    }, {});
}
