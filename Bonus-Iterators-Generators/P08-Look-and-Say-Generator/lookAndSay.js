function * lookAndSay(start) {
    let nextElement;
    //TODO
    yield nextElement;
}

let lookSequence = lookAndSay(1);
console.log(lookSequence.next().value);
console.log(lookSequence.next().value);
console.log(lookSequence.next().value);
console.log(lookSequence.next().value);
console.log(lookSequence.next().value);

let lookSequence2 = lookAndSay(113);
console.log(lookSequence2.next().value);
console.log(lookSequence2.next().value);
console.log(lookSequence2.next().value);
console.log(lookSequence2.next().value);
console.log(lookSequence2.next().value);
