// Iterator: An iterator is an object that implements a next() method which returns two values: value and done (boolean). next() can be called repeatedly until done is true.

class NumberIterator implements Iterator<number> {
    private current = 0;
    private max: number;

    constructor(max: number) {
        this.max = max;
    }

    next(): IteratorResult<number> {
        if (this.current < this.max) {
            return { value: this.current++, done: false };
        } else {
            return { value: undefined, done: true };
        }
    }
}

const iterator = new NumberIterator(5);

let i = 0;

while (i <= 5) {
    console.log(iterator.next());
    i++;
}
