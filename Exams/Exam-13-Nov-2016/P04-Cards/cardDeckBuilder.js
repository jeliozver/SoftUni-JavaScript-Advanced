function cardDeckBuilder(selector) {
    let container = $(selector);
    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const validSuits = ['S', 'H', 'D', 'C'];
    const suitToChar = {
        'S': "\u2660", // ♠
        'H': "\u2665", // ♥
        'D': "\u2666", // ♦
        'C': "\u2663", // ♣
    };

    return {
        addCard: function (face, suit) {
            if (isValid(face, suit)) {
                let newDiv = $('<div>')
                    .addClass('card')
                    .text(`${face} ${suitToChar[suit]}`);
                newDiv.on('click', reverseOrder);
                container.append(newDiv);

                function reverseOrder() {
                    let cards = Array.from(container.children());
                    container.html('');
                    for (let i = cards.length - 1; i >= 0 ; i--) {
                        container.append($(cards[i]).on('click', reverseOrder));
                    }
                }
            }

            function isValid(face, suit) {
                if (!validFaces.includes(face)) {
                    return false;
                }
                return validSuits.includes(suit);
            }
        }
    }
}

$(function() {
    let builder = cardDeckBuilder("#main");
    builder.addCard("10", "D");
    builder.addCard("K", "S");
    builder.addCard("Q", "H");
    builder.addCard("4", "C");
    builder.addCard("J", "S");
});