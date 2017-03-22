export default function* numbers(start: number, end: number) {
    for (let i=start; i<end; i++) {
        yield i;
    }
}

export function* oneTwoThree() {
    yield 1;
    yield 2;
    yield 3;
}