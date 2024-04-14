export function unix(): number {
    return Math.floor(Date.now() / 1000);
}

export function numberMap(min: number, max: number) {
    const list: number[] = [];
    for (let i = min; i <= max; i++) {
        list.push(i);
    }
    return list;
}
