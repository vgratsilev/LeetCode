export function isUgly(n: number): boolean {
    const ugly = (n: number): boolean => {
        if(n == 1) {
            return true;
        }

        if(n % 2 == 0) {
            return ugly(n / 2);
        }

        if(n % 3 == 0) {
            return ugly(n / 3);
        }

        if(n % 5 == 0) {
            return ugly(n / 5);
        }

        return false;
    };

    if(n <= 0) {
        return false;
    }

    return ugly(n);
}

export function isUglyLoop(n: number): boolean {
    if(n <= 0) {
        return false;
    }

    while(1 < n) {
        if(n % 2 === 0) {
            n = n / 2;
        } else if(n % 3 === 0) {
            n = n / 3;
        } else if(n % 5 === 0) {
            n = n / 5;
        } else {
            return false;
        }
    }

    return true;
}
