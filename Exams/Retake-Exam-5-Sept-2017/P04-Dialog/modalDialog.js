class Dialog {
    constructor(message, callback) {
        this.message = message;
        this.callback = callback;
        this._inputFields = [];
    }

    addInput(label, name, type) {
        let input = `<label>${label}</label>\n<input name="${name}" type="${type}">\n`;
        this._inputFields.push(input);
    }

    render() {
        let container = $('<div>').addClass('overlay');
        let dialogDiv = $('<div>').addClass('dialog');
        dialogDiv.append($('<p>').text(`${this.message}`));

        if (this._inputFields.length > 0) {
            for (let input of this._inputFields) {
                dialogDiv.append($(input));
            }
        }

        let okBtn = $('<button>').text('OK').on('click', () => {
            let obj = {};
            if (this._inputFields.length > 0) {
                let inputs = dialogDiv.find('input');
                inputs.each((index, element) => {
                    let key = $(element)[0].attributes[0].textContent;
                    obj[key] = $(element).val();
                });
            }

            this.callback(obj);
            $(container).remove();
        });

        let cancelBtn = $('<button>').text('Cancel').on('click', () => {
            $(container).remove();
        });

        dialogDiv.append(okBtn);
        dialogDiv.append(cancelBtn);
        container.append(dialogDiv);
        $(document.body).append(container);
    }
}