function modifyObject(obj) {
    if (!obj.handsShaking) {
        return obj;
    }
    
    obj.handsShaking = false;
    obj.bloodAlcoholLevel += (0.1 * obj.weight) * obj.experience;
    return obj;
}

console.log(modifyObject({
    weight: 120,
    experience: 20,
    bloodAlcoholLevel: 200,
    handsShaking: true
}));