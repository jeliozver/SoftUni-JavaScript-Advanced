(() => {
    Array.prototype.last = function () {
            return this[this.length - 1];
    };
    Array.prototype.skip = function (n) {
        let result = [];
        for (let i = n; i < this.length; i++) {
            result.push(this[i]);
        }
        return result;
    };
    Array.prototype.take = function (n) {
        let result = [];
        for (let i = 0; i < n; i++) {
            result.push(this[i]);
        }
        return result;
    };
    Array.prototype.sum = function () {
        return this.reduce((a, b) => a + b ,0);
    };
    Array.prototype.average = function () {
        return this.sum() / this.length;
    };
})();

let test = [1, 2, 3, 4, 5, 6, 7];
console.log(test.last()); // Expected 7
let testSkip = test.skip(3);
console.log(testSkip.join(', ')); // Expected 4, 5, 6, 7
let testTake = test.take(3);
console.log(testTake.join(', ')); // Expected 1, 2, 3
console.log(test.sum()); // Expected 28
console.log(test.average()); // Expected 4