let manager = (() => {
    let storage = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    let recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        coke: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        omelet: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        cheverme: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10,
        }
    };

    function isCarbEnough(recipe, quantity) {
        return recipes[recipe].carbohydrate * quantity <= storage.carbohydrate;
    }

    function isFlavourEnough(recipe, quantity) {
        return recipes[recipe].flavour * quantity <= storage.flavour;
    }

    function isFatEnough(recipe, quantity) {
        return recipes[recipe].fat * quantity <= storage.fat;
    }

    function isProteinEnough(recipe, quantity) {
        return recipes[recipe].protein * quantity <= storage.protein;
    }

    let robot = {
        restock: (microelement, quantity) => {
            storage[microelement] += quantity;
            return 'Success';
        },
        prepare: (recipe, quantity) => {
            if (recipe === 'apple' || recipe === 'coke') {
                if (!isCarbEnough(recipe, quantity)) {
                    return 'Error: not enough carbohydrate in stock';
                }
                if (!isFlavourEnough(recipe, quantity)) {
                    return 'Error: not enough flavour in stock';
                }

                storage.carbohydrate -= recipes[recipe].carbohydrate * quantity;
                storage.flavour -= recipes[recipe].flavour * quantity;
            }
            
            if (recipe === 'burger') {
                if (!isCarbEnough(recipe, quantity)) {
                    return 'Error: not enough carbohydrate in stock';
                }
                if (!isFatEnough(recipe, quantity)) {
                    return 'Error: not enough fat in stock';
                }
                if (!isFlavourEnough(recipe, quantity)) {
                    return 'Error: not enough flavour in stock';
                }

                storage.carbohydrate -= recipes[recipe].carbohydrate * quantity;
                storage.fat -= recipes[recipe].fat * quantity;
                storage.flavour -= recipes[recipe].flavour * quantity;
            }

            if (recipe === 'omelet') {
                if (!isProteinEnough(recipe, quantity)) {
                    return 'Error: not enough protein in stock';
                }
                if (!isFatEnough(recipe, quantity)) {
                    return 'Error: not enough fat in stock';
                }
                if (!isFlavourEnough(recipe, quantity)) {
                    return 'Error: not enough flavour in stock';
                }

                storage.protein -= recipes[recipe].protein * quantity;
                storage.fat -= recipes[recipe].fat * quantity;
                storage.flavour -= recipes[recipe].flavour * quantity;
            }

            if (recipe === 'cheverme') {
                if (!isProteinEnough(recipe, quantity)) {
                    return 'Error: not enough protein in stock';
                }
                if (!isCarbEnough(recipe, quantity)) {
                    return 'Error: not enough carbohydrate in stock';
                }
                if (!isFatEnough(recipe, quantity)) {
                    return 'Error: not enough fat in stock';
                }
                if (!isFlavourEnough(recipe, quantity)) {
                    return 'Error: not enough flavour in stock';
                }

                storage.protein -= recipes[recipe].protein * quantity;
                storage.carbohydrate -= recipes[recipe].carbohydrate * quantity;
                storage.fat -= recipes[recipe].fat * quantity;
                storage.flavour -= recipes[recipe].flavour * quantity;
            }

            return 'Success';
        },
        report: () => {
            let protein = storage['protein'];
            let carb = storage['carbohydrate'];
            let fat = storage['fat'];
            let flavour = storage['flavour'];
            return `protein=${protein} carbohydrate=${carb} fat=${fat} flavour=${flavour}`;
        }
    };

    return line => {
        let args = line.split(' ');

        if (args[0] === 'restock') {
            let microelement = args[1];
            let quantity = Number(args[2]);
            return robot.restock(microelement, quantity);
        } else if (args[0] === 'prepare') {
            let recipe = args[1].toLowerCase();
            let quantity = Number(args[2]);
            return robot.prepare(recipe, quantity);
        }

        return robot.report();
    }
})();