let cards = require('./cards').cardModule;
let mocha = require('mocha');
let expect = require('chai').expect;

let Card = cards.Card;
let Suits = cards.Suits;

describe("Test cards", () => {
    describe("General tests", () => {
        it("Card constructor should be a function", () => {
           expect(typeof Card.constructor).to.equal('function');
        });

        it("Card constructor should take 2 parameters", () => {
            expect(Card.length).to.equal(2);
        });

        it("instance of the created Card object should be the class constructor", () => {
            let card = new Card('Q', Suits.CLUBS);
            let check = card instanceof Card;
            expect(check).to.be.true;
        });

        it("Card class should have toString function", () => {
            expect(typeof Card.toString).to.equal('function');
        });

        it("Suits should be an object", () => {
            let check = Suits === Object(Suits);
            expect(check).to.be.true;
        });

        it("Suits should have 4 keys", () => {
            expect(Object.keys(Suits).length).to.equal(4);
        });

    });

    describe("Values tests", () => {
        it("setting invalid face value should throw error", () => {
            expect(()=>new Card('1',Suits.DIAMONDS)).to.throw(Error);
        });

        it("setting invalid suit value should throw error", () => {
            expect(()=>new Card('2',Suits.TRUMPS)).to.throw(Error);
        });

        it("setting invalid suit value should throw error", () => {
            expect(()=>new Card('2','diamonds')).to.throw(Error);
        });

        it("face property should be set properly upon creation", () => {
            let card = new Card('Q', Suits.CLUBS);
            expect(card.face).to.equal('Q');
        });

        it("suit property should be set properly upon creation", () => {
            let card = new Card('Q', Suits.CLUBS);
            expect(card.suit).to.equal('\u2663');
        });

        it("setting new value for the face property should update the previous value", () => {
            let card = new Card('Q', Suits.CLUBS);
            card.face = '5';
            expect(card.face).to.equal('5');
        });

        it("setting new value for the suit property should update the previous value", () => {
            let card = new Card('Q', Suits.CLUBS);
            card.suit = Suits.HEARTS;
            expect(card.suit).to.equal('\u2665');
        });

        it("toString function should return a string with proper format", () => {
            let card = new Card('Q', Suits.CLUBS);
            let stringCard = card.toString();
            expect(stringCard).to.equal('Q' + '\u2663');
        });

        it("toString function should return a string with proper format", () => {
            let card = new Card('2', Suits.SPADES);
            let stringCard = card.toString();
            expect(stringCard).to.equal('2' + '\u2660');
        });

        it("toString function should return a string with proper format", () => {
            let card = new Card('A', Suits.DIAMONDS);
            let stringCard = card.toString();
            expect(stringCard).to.equal('A' + '\u2666');
        });

        it("toString function should return a string with proper format", () => {
            let card = new Card('6', Suits.HEARTS);
            let stringCard = card.toString();
            expect(stringCard).to.equal('6' + '\u2665');
        });
    });
});