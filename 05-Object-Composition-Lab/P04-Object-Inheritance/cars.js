function processCommands(input) {
    let processor = (() => {
        let objects = new Map();

        function create(name) {
            objects.set(name, {});
        }

        function inherit(name, parent) {
            objects.set(name, Object.create(objects.get(parent)));
        }

        function set(name, property, value) {
            objects.get(name)[property] = value;
        }

        function print(name) {
            let current = objects.get(name);
            let result = [];
            for (let key in current) {
                result.push(key);
            }

            console.log(result.map(e => `${e}:${current[e]}`).join(', '));
        }

        return {
            create,
            inherit,
            set,
            print
        };
    })();

    for (let line of input) {
        let args = line.split(' ');
        let command = args[0];
        if (command === 'create') {
            if (args.length === 2) {
                processor[command](args[1]);
            } else {
                processor[args[2]](args[1], args[3]);
            }
        } else if (command === 'set') {
            processor[command](args[1], args[2], args[3])
        } else if (command === 'print') {
            processor[command](args[1]);
        }
    }
}

processCommands([
    'create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'
]);
