// An object is iterable if it implements iterable protocol, i.e, if it implements Symbol.iterator method. This allows object to be used in a for...of loop.

class NumberRange implements Iterable<number> {
    constructor(private start: number, private end: number) { }

    [Symbol.iterator](): Iterator<number> {
        let current = this.start;
        const end = this.end;

        return {
            next(): IteratorResult<number> {
                if (current <= end) {
                    return { value: current++, done: false };
                } else {
                    return { value: undefined, done: true };
                }
            }
        }
    }
}

const numberRange = new NumberRange(1, 5);

for (const num of numberRange) {
    console.log(num);
}
