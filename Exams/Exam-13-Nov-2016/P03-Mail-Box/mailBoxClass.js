class MailBox {
    constructor() {
        this.messages = [];
    }

    get messages() {
        return this._messages;
    }

    set messages(value) {
        this._messages = value;
    }

    get messageCount() {
        return this._messages.length;
    }

    addMessage(subject, text) {
        this._messages.push({
            subject: subject,
            text: text
        });

        return this;
    }

    deleteAllMessages() {
        this._messages = [];
    }

    findBySubject(substr) {
        let array = [];
        for (let msg of this.messages) {
            if (msg.subject.indexOf(substr) !== - 1) {
                array.push(msg);
            }
        }

        return array;
    }

    toString() {
        if (this.messageCount === 0) {
            return '* (empty mailbox)';
        }

        let result = '';
        for (let msg of this.messages) {
            result += `* [${msg.subject}] ${msg.text}\n`;
        }

        return result.substring(0, result.length - 1);
    }
}