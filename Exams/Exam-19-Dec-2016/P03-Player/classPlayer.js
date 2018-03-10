class Player {
    constructor(nickName) {
        this.nickName = nickName;
        this._scoreSheet = [];
    }

    get scoreCount() {
        return this._scoreSheet.length;
    }

    get highestScore() {
        return this._scoreSheet[0];
    }

    get topFiveScore() {
        return this._scoreSheet.slice(0, 5);
    }
    
    addScore(score) {
        if (typeof score === 'number' || typeof score === 'string') {
            if (!isNaN(Number(score))) {
                this._scoreSheet.push(Number(score));
                this.sort();
            }
        }

        return this;
    }

    sort() {
        this._scoreSheet.sort((a, b) => b - a);
    }

    toString() {
        if (this.scoreCount === 0) {
            return `${this.nickName}: []`;
        }

        return `${this.nickName}: [${this._scoreSheet}]`;
    }
}