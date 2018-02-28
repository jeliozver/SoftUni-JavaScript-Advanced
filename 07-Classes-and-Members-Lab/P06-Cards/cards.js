let cardModule = ((() => {
    const Suits = {
        'SPADES': "\u2660", // ♠
        'HEARTS': "\u2665", // ♥
        'DIAMONDS': "\u2666", // ♦
        'CLUBS': "\u2663" // ♣
    };

    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const validSuits = ["\u2660", "\u2665", "\u2666", "\u2663"];

    class Card {
        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
        }

        get face() {
            return this._face;
        }

        set face(value) {
            if (!validFaces.includes(value)) {
                throw new Error('Invalid card face!');
            }

            this._face = value;
        }

        get suit() {
            return this._suit;
        }

        set suit(value) {
            if (!validSuits.includes(value)) {
                throw new Error('Invalid card suit!');
            }

            this._suit = value;
        }

        toString() {
            return this._face + this._suit;
        }
    }

    return {
        Suits:Suits,
        Card:Card
    }
}))();

module.exports = {cardModule};