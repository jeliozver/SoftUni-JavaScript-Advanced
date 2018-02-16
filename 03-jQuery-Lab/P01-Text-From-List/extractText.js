function extractText() {
    let result = [];
    $('#items').find('li').each((i, e) => result.push(e.textContent));
    $('#result').text(result.join(', '));
}