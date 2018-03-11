function reverseIterator(array) {
    let index = array.length - 1;
    return {
        next: function () {
            if (index >= 0) {
                return {
                    value: array[index--],
                    done: false
                };
            } else {
                return {
                    done: true
                }
            }
        }
    }
}