export default function* filter<T>(items: Iterable<T>, predicate: (item: T) => boolean): Iterable<T> {
    for(let item of items) {
        if (!predicate(item)) { continue; }
        yield item;
    }
}