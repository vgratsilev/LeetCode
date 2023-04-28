export const jsonStringify = (object: any): string => {
    if(typeof object === 'string') {
        return `"${object}"`;
    }

    if(typeof object === 'number' || typeof object === 'boolean') {
        return object.toString();
    }

    if(Array.isArray(object)) {
        return `[${object.map((obj) => {
            return jsonStringify(obj);
        }).join(',')}]`;
    }

    if(typeof object === 'object') {
        if(object === null) {
            return 'null';
        }
        return `{${Object.keys(object).map((obj) => {
            return `"${obj}":${jsonStringify(object[obj])}`;
        }).join(',')}}`;
    }

    return '';
};
