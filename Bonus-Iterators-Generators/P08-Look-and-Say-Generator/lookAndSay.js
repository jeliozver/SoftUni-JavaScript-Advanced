function* lookAndSay(start) {
    let seed = start.toString();

    while (true) {
        let nextElement = '';
        let count = 1;
        for (let i = 0; i < seed.length; i++) {
                if (seed[i] === seed[i + 1]) {
                    count++;
                } else {
                    nextElement += `${count}${seed[i]}`;
                    count = 1;
                }
        }

        seed = nextElement;
        yield nextElement;
    }
}

let lookSequence = lookAndSay(1);
console.log(lookSequence.next().value); // 11
console.log(lookSequence.next().value); // 21
console.log(lookSequence.next().value); // 1211
console.log(lookSequence.next().value); // 111221
console.log(lookSequence.next().value); // 312211
console.log('------------');
let lookSequence2 = lookAndSay(113);
console.log(lookSequence2.next().value); // 2113
console.log(lookSequence2.next().value); // 1222113
console.log(lookSequence2.next().value); // 11222113
console.log(lookSequence2.next().value); // 21322113
console.log(lookSequence2.next().value); // 121113222113