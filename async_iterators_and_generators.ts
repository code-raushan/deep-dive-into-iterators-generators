async function* asyncNumberGenerator(max: number): AsyncGenerator<number> {
    for (let i = 0; i < max; i++) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        yield i;
    }
}

const asyncGenerator = asyncNumberGenerator(5);

(async () => {
    for await (const num of asyncGenerator) {
        console.log(num);
    }
})();
