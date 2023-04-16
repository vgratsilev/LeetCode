export const checkIfInstanceOf = (obj: any, classFunction: any): boolean => {
    if(obj === null || obj === undefined || typeof classFunction !== 'function') return false;
    return Object(obj) instanceof classFunction;
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */
