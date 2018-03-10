function move(command) {
    let selectedTowns = $('#selected-towns');
    let availableTowns = $('#available-towns');
    let output = $('#output');

    if (command === 'right') {
        let elemToMove = availableTowns.find('option:selected');
        selectedTowns.append(elemToMove);
    } else if (command === 'left') {
        let elemToMove = selectedTowns.find('option:selected');
        availableTowns.append(elemToMove);
    } else {
        let result = [];
        selectedTowns.children().each((index, element) => {
            result.push(element.textContent);
        });

        output.text(`${result.join('; ')}`);
    }
}