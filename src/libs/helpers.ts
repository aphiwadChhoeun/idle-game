export function convertRange(value: number, r1: Array<number>, r2: Array<number>): number {
    return (value - r1[0]) * (r2[1] - r2[0]) / (r1[1] - r1[0]) + r2[0];
}

export function lerp(start: number, end: number, t: number): number {
    return start * (1 - t) + end * t
}