function parseData(array) {
    const validToppings = ['milk chocolate', 'white chocolate', 'dark chocolate'];
    const validFillings = ['hazelnut', 'caramel', 'strawberry', 'blueberry', 'yogurt', 'fudge'];
    const invalidSpices = ['poison', 'asbestos'];

    class Candy {
        constructor(topping, filling, spice) {
            if (!Candy.isToppingValid(topping)) {
                throw new TypeError('Invalid Topping!');
            }

            if (!Candy.isFillingValid(filling)) {
                throw new TypeError('Invalid Filling!');
            }

            if (Candy.isSpiceValid(spice)) {
                throw new TypeError('Invalid Spice!');
            }

            this.topping = topping;
            this.filling = filling;
            this.spice = spice;
        }

        static isToppingValid(topping) {
            return validToppings.includes(topping);
        }

        static isFillingValid(filling) {
            if (filling === null) return true;
            let fillings = filling.split(',').filter(e => e !== 0);
            if (fillings.length > 3) return false;
            for (let fill of fillings) {
                if (!validFillings.includes(fill)) return false;
            }

            return true;
        }

        static isSpiceValid(spice) {
            return invalidSpices.includes(spice);
        }
    }

    let result = [];
    for (let recipe of array) {
        if (recipe.split(':').length !== 3) continue;
        let [topping, filling, spice] = recipe.split(':');
        if (topping === '') topping = null;
        if (filling === '') filling = null;
        if (spice === '') spice = null;
        try {
            result.push(new Candy(topping, filling, spice));
        } catch (error) {

        }
    }

    return result;
}

console.log(parseData([
    'milk chocolate:hazelnut,caramel:pumpkin',
    'dark chocolate::chips',
    'white chocolate::poison',  // invalid
    'white chocolate:fudge:',
    'frosting:yogurt:frosting', // invalid
    'dark chocolate:blueberry:rock crystals'
]));