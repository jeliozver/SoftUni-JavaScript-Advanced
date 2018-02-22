function composeChart(name, age, weight, height) {
    let bmi = calcBmi(Number(weight), Number(height) / 100);
    let status = getStatus(bmi);
    let isObese = status === 'obese';

    let patient = {
        name: name,
        personalInfo: {
            age: Math.round(Number(age)),
            weight: Math.round(Number(weight)),
            height: Math.round(Number(height)),
        },
        BMI: Math.round(bmi),
        status: status,
        recommendation: 'admission required'
    };

    if (!isObese) {
        delete patient.recommendation;
    }

    return patient;

    function calcBmi(weight, height) {
        return weight / (height * height);
    }

    function getStatus(bmi) {
       if (bmi < 18.5) {
           return 'underweight';
       } else if (bmi < 25) {
           return 'normal';
       } else if (bmi < 30) {
           return 'overweight';
       } else {
           return 'obese';
       }
    }
}

// console.log(composeChart('Peter', 29, 75, 182));
// console.log(composeChart("Honey Boo Boo", 9, 57, 137));