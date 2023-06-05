export function jsonToMatrix(arr: any[]): (string | number | boolean | null)[] {
    const result = {};
    const resultArray: (string | number | boolean | null)[] = [];

    function getKey(currentParentKey: string, key: string) {
        return currentParentKey ? `${currentParentKey}.${key}` : key;
    }

    // recursive method to manage object parsing and to manage an object structure
    function manageObjectParsing(object: any, index: number, currentParentKey = '') {
        const keys = Object.keys(object);
        for(let key of keys) {
            const value = object[key];
            const isObjectType = value !== null && typeof value === 'object';
            if(isObjectType) {
                const parentKey = getKey(currentParentKey, key);
                manageObjectParsing(value, index, parentKey);
            } else {
                const columnKey = currentParentKey ? `${currentParentKey}.${key}` : key;
                // @ts-ignore
                const row = result[columnKey] ?? [];
                row[index] = value;
                // @ts-ignore
                result[columnKey] = row;
            }
        }
    }

    // will call the recursive method for each object or array of the input
    function jsonToMatrixParser() {
        for(let i = 0; i < arr.length; i++) {
            manageObjectParsing(arr[i], i);
        }
    }

    // used to prepare output structure
    function structureOutput() {
        const colKeys = Object.keys(result).sort((a, b) => a.localeCompare(b));
        //inserting first row with column in resultArray
        // @ts-ignore
        resultArray.push(colKeys);
        for(let i = 0; i < arr.length; i++) {
            const row = [];
            for(let columnKey of colKeys) {
                // @ts-ignore
                const isValue = result?.[columnKey]?.[i] !== undefined;
                // @ts-ignore
                const value = isValue ? result?.[columnKey]?.[i] : '';
                row.push(value);
            }
            // @ts-ignore
            resultArray.push(row);
        }
    }

    jsonToMatrixParser();
    structureOutput();
    return resultArray;
}
