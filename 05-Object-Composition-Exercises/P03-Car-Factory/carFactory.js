function assembleCar(requirements) {
    let storage = {
        smallEngine: {power: 90, volume: 1800},
        normalEngine: {power: 120, volume: 2400},
        monsterEngine: {power: 200, volume: 3500},
        hatchback: {type: 'hatchback', color: requirements.color},
        coupe: {type: 'coupe', color: requirements.color}
    };

    let resultCar = {
        model: requirements.model,
        engine: {},
        carriage: {},
        wheels: [],
    };

    let wheelsSize = requirements.wheelsize;
    if (wheelsSize % 2 === 0) wheelsSize--;
    let engine = storage.normalEngine;
    if (requirements.power <= 90) engine = storage.smallEngine;
    if (requirements.power > 120) engine = storage.monsterEngine;

    resultCar.engine = engine;
    resultCar.carriage = storage[requirements.carriage];
    resultCar.wheels = [wheelsSize, wheelsSize, wheelsSize, wheelsSize];

    return resultCar;
}

console.log(assembleCar({
    model: 'VW Golf II',
    power: 100,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));