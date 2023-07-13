export function constructRectangle(area: number): number[] {
    const sqrt = Math.floor(Math.sqrt(area));

    for (let i = sqrt; i >= 1; i--) {
        if (area % i == 0) {
            return [ area / i, i ];
        }
    }
    
    return [ area, 1 ];
}
