function reverseIterable(array) {
    let index = array.length - 1;
    return {
        [Symbol.iterator]: function () {
            return this;
        },
        ['next']: function () {
            if (index >= 0) {
                return {
                    value: array[index--],
                    done: false
                }
            } else {
                return {
                    done: true
                }
            }
        }
    }
}