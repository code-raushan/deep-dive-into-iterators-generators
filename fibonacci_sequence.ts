function* fibonacciSequence(): Generator<number> {
    let a = 0, b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

const fib_sequence = fibonacciSequence();

console.log(fib_sequence.next());
console.log(fib_sequence.next());
console.log(fib_sequence.next());
console.log(fib_sequence.next());
console.log(fib_sequence.next());
console.log(fib_sequence.next());
