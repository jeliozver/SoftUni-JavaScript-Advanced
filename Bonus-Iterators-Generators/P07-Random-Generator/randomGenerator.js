function* random(x) {
    const p = 4871;
    const q = 7919;
    let prev = x;
    let nxt;

    function next() {
        nxt = (prev * prev) % (p * q);
        prev = nxt;
        return {value: nxt % 100};
    }

    while (true) {
        yield next().value;
    }
}

let rnd = random(100);
for (let i = 0; i < 10; i++) {
    console.log(rnd.next().value);
}