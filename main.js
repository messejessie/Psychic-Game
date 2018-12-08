//Global Variables:
var userImput = event.key;
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var rando = math.floor(math.random*26)
var computerGuess ;
var validate = -1;
var wins = 0;
var lose = 0;
var gusss = 0;
var guessLeft = 9;

//User Typing Letter:
document.onkeyup = function(event) {

//User Types letter: