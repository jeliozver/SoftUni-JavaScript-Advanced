class TrainingCourse {
    constructor(title, trainer) {
        this.title = title;
        this.trainer = trainer;
        this.topics = [];
    }

    get firstTopic() {
        return this.topics[0];
    }

    get lastTopic() {
        return this.topics[this.topics.length - 1];
    }

    addTopic(title, date) {
        this.topics.push({
            title: title,
            date: date
        });

        this.topics = this.topics.sort((a, b) => a.date - b.date);

        return this;
    }

    toString() {
        let result = `Course "${this.title}" by ${this.trainer}\n`;
        if (this.topics.length > 0) {
            for (let topic of this.topics) {
                result += ` * ${topic.title} - ${topic.date}\n`;
            }

            result = result.substring(0, result.length - 1);
        }

        return result;
    }
}