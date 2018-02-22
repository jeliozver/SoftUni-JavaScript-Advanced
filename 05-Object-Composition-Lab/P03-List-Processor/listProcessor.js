function processCommands(commands) {
    let listProcessor = (() => {
        let list = [];

        function add(string) {
            list.push(string);
        }

        function remove(string) {
            list = list.filter(e => e !== string);
        }

        function print() {
            console.log(list + '');
        }

        return {
            add,
            remove,
            print,
        }
    })();

    for (let command of commands) {
        let args = command.split(' ');
        listProcessor[args[0]](args[1]);
    }
}

processCommands([
    'add hello', 'add again', 'remove hello', 'add again', 'print'
]);