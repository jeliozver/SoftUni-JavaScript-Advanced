function processCommands(commands) {
    let processCommand = (function () {
        let text = '';

        return command => {
            let args = command.split(' ');
            switch (args[0]) {
                case 'append':
                    text += args[1];
                    break;
                case 'removeStart':
                    text = text.slice(Number(args[1]));
                    break;
                case 'removeEnd':
                    text = text.slice(0, text.length - Number(args[1]));
                    break;
                case 'print':
                    console.log(text);
                    break;
            }
        }
    })();

    for (let cmd of commands) {
        processCommand(cmd);
    }
}

// processCommands([
//     'append 123',
//     'append 45',
//     'removeStart 2',
//     'removeEnd 1',
//     'print'
// ]);