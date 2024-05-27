const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

let deck = [];

for (let suit of suits) {
    for (let rank of ranks) {
        deck.push(`${rank} of ${suit}`);
    }
}


for (let card of deck) {
    console.log(card);
}
