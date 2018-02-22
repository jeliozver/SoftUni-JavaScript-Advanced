function orderRectangles(rectangles) {
    let container = [];
    for (let rectangle of rectangles) {
        container.push(createRectangle(rectangle[0], rectangle[1]));
    }

    container.sort((a, b) => a.compareTo(b));
    return container;

    function createRectangle(width, height) {
        let rectangle = {
            width: width,
            height: height,
            area: () => rectangle.width * rectangle.height,
            compareTo: other => {
                let result = other.area() - rectangle.area();
                return result || (other.width - rectangle.width);
            }
        };

        return rectangle;
    }
}

console.log(orderRectangles([
    [10, 5], [3, 20], [5, 12]
]));