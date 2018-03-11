function* primeNumberGenerator() {
    let num = 2;

    function isPrime(n) {
        if (n < 2) return false;

        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }

        return true;
    }

    function next() {
        return {value: num};
    }

    while (true) {
        if (isPrime(num)) {
            yield next().value;
        }

        num++;
    }
}

let prime = primeNumberGenerator();
let primesUnder100 = [];
for (let i = 0; i < 25; i++) {
    primesUnder100.push(prime.next().value);
}
console.log(primesUnder100.join(', '));