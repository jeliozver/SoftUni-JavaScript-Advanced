function subSum(array, startIndex, endIndex) {
    if (array.constructor !== Array) return NaN;
    if (array.length === 0) return 0;
    if (startIndex < 0) startIndex = 0;
    if (endIndex > array.length - 1) endIndex = array.length - 1;

    let sum = 0;
    for (let i = startIndex; i <= endIndex; i++) {
        if (isNaN(Number(array[i]))) return NaN;
        sum += array[i];
    }

    return sum;
}

console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300)); // 150
console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1)); // 3.3
console.log(subSum([10, 'twenty', 30, 40], 0, 2)); // NaN
console.log(subSum([], 0, 2)); // 0
console.log(subSum('text', 0, 2)); // NaN
console.log(subSum(1, 0, 2)); // NaN