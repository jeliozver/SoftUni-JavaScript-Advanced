function* fibonacci() {
    let prevPrev = 0;
    let prev = 1;
    let result = 0;
    
    function next() {
        result = prev + prevPrev;
        prevPrev = prev;
        prev = result;
        return {value: prevPrev};
    }

    while (true) {
        yield next().value;
    }
}

let fib = fibonacci();
for (let i = 0; i < 10; i++) {
    console.log(fib.next().value);
}