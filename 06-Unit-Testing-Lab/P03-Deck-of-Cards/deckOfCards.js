function printDeckOfCards(deck) {
    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const validSuits = ['S', 'H', 'D', 'C'];
    const suitToChar = {
        'S': "\u2660", // ♠
        'H': "\u2665", // ♥
        'D': "\u2666", // ♦
        'C': "\u2663", // ♣
    };

    let cards = [];
    let face = '';
    let suit = '';

    for (let card of deck) {
        if (!isValid(card)) {
            return;
        }
        
        cards.push(makeCard(face, suit))
    }

    console.log(cards.join(', '));

    function makeCard(face, suit) {
        return {
            face: face,
            suit: suit,
            toString: () => {
                return `${face}${suitToChar[suit]}`;
            }
        };
    }

    function isValid(card) {
        if (card.length > 3 || card.length < 2) {
            console.log(`Invalid card: ${card}`);
            return false;
        }

        if (card.length === 3) {
            face = '10';
            suit = card[2];
        } else {
            face = card[0];
            suit = card[1];
        }

        if (!validFaces.includes(face) || !validSuits.includes(suit)) {
            console.log(`Invalid card: ${card}`);
            return false;
        }

        return true;
    }
}

printDeckOfCards(['10D', '3D', 'QD', '10C']);