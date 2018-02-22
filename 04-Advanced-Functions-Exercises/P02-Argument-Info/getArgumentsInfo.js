function getArgumentsInfo() {
    let summary = new Map();
    for (let i = 0; i < arguments.length; i++) {
        let value = arguments[i];
        let type = typeof value;
        console.log(`${type}: ${value}`);

        if (!summary.has(type)) {
            summary.set(type, 0);
        }
        summary.set(type, summary.get(type) + 1);
    }

    let sorted = [...summary].sort((a, b) => b[1] - a[1]);
    for (let kvp of sorted) {
        console.log(`${kvp[0]} = ${kvp[1]}`)
    }
}

// getArgumentsInfo(42, 'cat', [], undefined);