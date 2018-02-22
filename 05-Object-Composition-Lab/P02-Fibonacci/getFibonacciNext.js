function getFibonacciNext() {
    let prevPrev = 0;
    let prev = 1;
    let result = 0;

    function getNext() {
        result = prev + prevPrev;
        prevPrev = prev;
        prev = result;
        return prevPrev;
    }

    return getNext;
}

let fib = getFibonacciNext();
for (let i = 0; i < 10; i++) {
    console.log(fib());
}