function getMaxElement(array) {
    return Math.max.apply(null, array);
}

console.log(getMaxElement([100, 20, 5]));