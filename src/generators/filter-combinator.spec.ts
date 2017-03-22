import filter from './combinators/filter';

describe('filter combinator', () => {
    it('can filter array', () => {
        const arr = [1,2,3,4];
        const filtered = filter(arr, n => !(n % 2));
        const materialized = Array.from(filtered);
        expect(materialized).toEqual([2,4]);
    })
});