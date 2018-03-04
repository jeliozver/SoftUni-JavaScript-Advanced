function balloons() {
    class Balloon {
        constructor(color, gasWeight) {
            this.color = color;
            this.gasWeight = gasWeight;
        }
    }

    class PartyBalloon extends Balloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength) {
            super(color, gasWeight);
            this.ribbonColor = ribbonColor;
            this.ribbonLenhth = ribbonLength;
        }

        get ribbon() {
            return {
                color: this.ribbonColor,
                length: this.ribbonLenhth
            }
        }
    }

    class BirthdayBalloon extends PartyBalloon {
        constructor(color, gasWeight, ribbonColor, ribbonLength, text) {
            super(color, gasWeight, ribbonColor, ribbonLength);
            this._text = text;
        }

        get text() {
            return this._text;
        }
    }

    return {
        Balloon,
        PartyBalloon,
        BirthdayBalloon
    }
}

let container = balloons();
let Balloon = container.Balloon;
let PartyBalloon = container.PartyBalloon;
let BirthdayBalloon = container.BirthdayBalloon;

let baloon = new Balloon('red', 40);
console.log(baloon);
let partyBalloon = new PartyBalloon('blue', 80, 'red', 20);
console.log(partyBalloon);
console.log(partyBalloon.ribbon);
let birthdayBalloon = new BirthdayBalloon('green', 80, 'yellow', 20, 'Happy Birthday!');
console.log(birthdayBalloon);
console.log(birthdayBalloon.ribbon);