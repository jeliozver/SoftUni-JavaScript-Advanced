let recordModule = (function () {
    let id = 0;

    class Record {
        constructor(temperature, humidity, pressure, windSpeed) {
            this.temperature = temperature;
            this.humidity = humidity;
            this.pressure = pressure;
            this.windSpeed = windSpeed;
            this.id = id++;
        }

        get getWeather() {
            if (this.temperature < 20 &&
                this.windSpeed > 25 &&
                (this.pressure < 700 || this.pressure > 900)) {
                return 'Stormy';
            }

            return 'Not stormy';
        }

        toString() {
            let result = `Reading ID: ${this.id}\n`;
            result += `Temperature: ${this.temperature}*C\n`;
            result += `Relative Humidity: ${this.humidity}%\n`;
            result += `Pressure: ${this.pressure}hpa\n`;
            result += `Wind Speed: ${this.windSpeed}m/s\n`;
            result += `Weather: ${this.getWeather}\n`;
            return result;
        }
    }

    return Record;

})();

let Record = recordModule;

let record1 = new Record(32, 66, 760, 12);
console.log(record1.toString());

let record2 = new Record(10, 40, 680, 30);
console.log(record2.toString());
