export function countSegments(s: string): number {
    return s.split(' ').filter(e => e.length > 0).length;
}
