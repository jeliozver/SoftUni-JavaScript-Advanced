class TimeSpan {
    constructor(hours, minutes, seconds) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
        this._totalSeconds = hours * 3600 + minutes * 60 + seconds;
    }

    get hours() {
        return this._hours;
    }

    set hours(value) {
        if (parseInt(value) !== value) {
            throw new RangeError(`Invalid hours: ${value}`);
        }

        this._hours = value;
    }

    get minutes() {
        return this._minutes;
    }

    set minutes(value) {
        if (parseInt(value) !== value) {
            throw new RangeError(`Invalid minutes: ${value}`);
        }

        this._minutes = value;
    }

    get seconds() {
        return this._seconds;
    }

    set seconds(value) {
        if (parseInt(value) !== value) {
            throw new RangeError(`Invalid seconds: ${value}`);
        }

        this._seconds = value;
    }

    toString() {
        let hours = Math.floor(this._totalSeconds / 3600);
        let minutes = Math.floor(this._totalSeconds / 60) % 60;
        let seconds = this._totalSeconds % 60;
        if (minutes < 10) minutes = '0' + minutes;
        if (seconds < 10) seconds = '0' + seconds;
        return `${hours}:${minutes}:${seconds}`
    }
}

console.log('' + new TimeSpan(7, 8, 5));	// 7:08:05
console.log('' + new TimeSpan(12, 76, -5));	// 13:15:55
// console.log('' + new TimeSpan('', 2.5, {}));	// RangeError: Invalid hours:
// console.log('' + new TimeSpan(3, 2.5, {}));	// RangeError: Invalid minutes: 2.5
// console.log('' + new TimeSpan(3, 2, {})); // RangeError: Invalid seconds: [object Object]