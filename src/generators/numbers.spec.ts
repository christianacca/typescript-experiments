import {default as numbers, oneTwoThree} from './numbers';

describe('oneTwoThree', () => {
    it('can generate 3 numbers', () => {
        const result: number[] = [];
        const it = oneTwoThree();
        for(const i of it) {
            result.push(i);
        }

        expect(result).toEqual([1,2,3]);
    });
});

describe('numbers', () => {
    it('can generate range', () => {
        const result: number[] = [];
        const it = numbers(0, 2);
        for(const i of numbers(0, 2)) {
            result.push(i);
        }

        expect(result).toEqual([0,1]);
    });
});