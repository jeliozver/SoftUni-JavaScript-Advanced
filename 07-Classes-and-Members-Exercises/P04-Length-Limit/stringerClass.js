class Stringer{
    constructor(string, length) {
        this.innerString = string;
        this.innerLength = length;
    }

    increase(n) {
        this.innerLength += n;
    }

    decrease(n) {
        this.innerLength -= n;
        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }

    toString() {
        if (this.innerString.length > this.innerLength) {
            return this.innerString.substring(0, this.innerLength) + '...';
        }

        return this.innerString;
    }
}

let newStr = new Stringer('Test', 5);
console.log(newStr.toString()); // Test

newStr.decrease(3);
console.log(newStr.toString()); // Te...

newStr.decrease(5);
console.log(newStr.toString()); // ...

newStr.increase(4);
console.log(newStr.toString()); // Test
