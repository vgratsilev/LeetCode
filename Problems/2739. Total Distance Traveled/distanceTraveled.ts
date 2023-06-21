export function distanceTraveled(mainTank: number, additionalTank: number): number {
    if (mainTank < 5 || additionalTank < 1) {
        return mainTank * 10;
    }

    let addFuel = ~~((mainTank - 5) / 4 + 1);
    if (addFuel > additionalTank) {
        addFuel = additionalTank;
    }

    return (mainTank + addFuel) * 10;
}

export function distanceTraveled2(mainTank: number, additionalTank: number): number {
    let startTank = 1;
    let totalDistance = 0;

    while (startTank <= mainTank) {
        if (startTank % 5 == 0 && additionalTank !== 0) {
            additionalTank--;
            mainTank++;
        }

        startTank++;
        totalDistance += 10;
    }
    
    return totalDistance;
}
