/**
 * Time complexity O()
 * Space complexity O()
 */

export const addBinary = (a: string, b: string): string => {
    let result = '';
    let index = 0;
    let carry = 0;

    while(index < Math.max(a.length, b.length)) {
        let x = 0;
        let y = 0;

        if(a.length - 1 - index >= 0) {
            x = parseInt(a[a.length - 1 - index], 2);
        }

        if(b.length - 1 - index >= 0) {
            y = parseInt(b[b.length - 1 - index], 2);
        }

        let sum = carry + x + y;

        if(sum <= 1) {
            carry = 0;
            result = `${sum}${result}`;
        } else {
            carry = 1;
            result = `${sum % 2}${result}`;
        }
        index++;
    }
    if(carry === 1) {
        result = `1${result}`;
    }

    return result;
};


export const addBinary2 = (a: string, b: string): string => {
    return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
};

