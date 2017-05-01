//Given an array containing a deck of cards, implement a function 
//that shuffles the deck.

var shuffleDeck = function(deck) {
  //attach random number to each card
  for (var i = 0; i < deck.length; i++) {
    deck[i] = {value: deck[i], random: Math.random()}
  }
  
  //sort by random number
  deck = deck.sort((a, b) => {
    if (a.random < b.random) return -1;
    return 1;
  });
  
  //separate card values from random numbers
  return deck.map((card) => card.value);
}