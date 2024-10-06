// Generator: A generator is a special kind of function that be paused and resumed, making it easier to create iterators. They use function* syntax and the yield keyword..

function* generateNumbers(max: number): Generator<number> {
    for (let i = 0; i < max; i++) {
        yield i;
    }
}

const generator = generateNumbers(5);

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

/**
 * Key points about generators:
 * 1. They can be paused and resumed.
 * 2. They automatically create an iterator.
 * 3. They can yield multiple values.
 * 4. They can be infinite.
 */
