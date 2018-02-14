function extractParenthesis(elementId) {
    let text = document.getElementById(elementId).textContent;
    let regex = /\((.+?)\)/g;
    let matches = regex.exec(text);
    let result = [];
    while (matches) {
        result.push(matches[1]);
        matches = regex.exec(text);
    }

    return result.join('; ')
}

// console.log(extractParenthesis('content'));