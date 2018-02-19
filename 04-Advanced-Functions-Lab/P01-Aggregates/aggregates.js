function aggregate(array) {
    function reduce(array, func) {
        let result = array[0];
        
        for (let nextElement of array.slice(1)) {
            result = func(result, nextElement);
        }

        return result;
    }

    console.log(`Sum = ${reduce(array, (a, b) => a + b)}`);
    console.log(`Min = ${reduce(array, (a, b) => a > b ? b : a)}`);
    console.log(`Max = ${reduce(array, (a, b) => a < b ? b : a)}`);
    console.log(`Product = ${reduce(array, (a, b) => a * b)}`);
    console.log(`Join = ${reduce(array, (a, b) => a.toString() + b.toString())}`);
}

// aggregate([2, 3, 10, 5]);
// aggregate([5, -3, 20, 7, 0.5]);