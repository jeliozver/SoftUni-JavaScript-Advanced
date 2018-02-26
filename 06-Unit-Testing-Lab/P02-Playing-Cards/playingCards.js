function makeCard(face, suit) {
    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const validSuits = ['S', 'H', 'D', 'C'];
    const suitToChar = {
        'S': "\u2660", // ♠
        'H': "\u2665", // ♥
        'D': "\u2666", // ♦
        'C': "\u2663", // ♣
    };

    isValid(face, suit);

    return {
        face: face,
        suit: suit,
        toString: () => {
            return `${face}${suitToChar[suit]}`;
        }
    };

    function isValid(face, suit) {
        if (!validFaces.includes(face)) {
            throw new Error('Invalid face!');
        }
        if (!validSuits.includes(suit)) {
            throw new Error('Invalid suit!');
        }
    }
}

console.log(makeCard('2', 'H').toString());
console.log(makeCard('A', 'S').toString());