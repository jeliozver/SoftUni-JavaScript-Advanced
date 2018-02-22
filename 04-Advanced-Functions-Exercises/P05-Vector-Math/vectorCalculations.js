let vectorCalculator = (() => {

    function add(vec1, vec2) {
        let [xa, xb] = vec1;
        let [ya, yb] = vec2;
        let result = [];
        result.push(xa + ya);
        result.push(xb + yb);
        return result;
    }

    function multiply(vec1, scalar) {
        let [xa, ya] = vec1;
        let result = [];
        result.push(xa * scalar);
        result.push(ya * scalar);
        return result;
    }

    function length(vec1) {
        let [xa, ya] = vec1;
        return Math.sqrt((xa * xa) + (ya * ya));
    }

    function dot(vec1, vec2) {
        let [xa, xb] = vec1;
        let [ya, yb] = vec2;
        return (xa * ya) + (xb * yb);
    }

    function cross(vec1, vec2) {
        let [xa, xb] = vec1;
        let [ya, yb] = vec2;
        return (xa * yb) - (ya * xb);
    }

    return {
        add,
        multiply,
        length,
        dot,
        cross,
    };
})();

console.log(vectorCalculator.add([5.43, -1], [1, 31]));
console.log(vectorCalculator.multiply([3.5, -2], 2));
console.log(vectorCalculator.length([3, -4]));
console.log(vectorCalculator.dot([2, 3], [2, -1]));
console.log(vectorCalculator.cross([3, 7], [1, 0]));