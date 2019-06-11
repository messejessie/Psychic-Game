// Declaring all of the variables in the array
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//text: 
var game = document.querySelector('main');

// Declaring the wins, losses, and guessesLeft variables
var wins = 0;
var losses = 0;
var guessesLeft = 10;

// Computer Guess
var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

// User Function
document.onkeyup = function (event) {

    //User event 
    var userGuess = event.key;
    console.log(userGuess, computerGuess);
    

    // Defining wins
    if (guessesLeft > 0) {
        if (userGuess === computerGuess) {
            wins++;
            guessesLeft--;
            console.log(guessesLeft);
            initateGuess();
            console.log(wins);

        }
        else {
            guessesLeft--;
            console.log(guessesLeft);
        }
    }

    //Defining loss
    else {
        losses++;
        console.log(losses);
        initateGuess();
    }

      // display to text:
    game.innerHTML = `
<p>Your choose: ${userGuess}</p>
<p>Guesses left: ${guessesLeft}</p>
<p>wins: ${wins}</p>
<p>losses: ${losses}</p>
`

}

//fuction for reset 
function initateGuess() {
    computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    guessesLeft = 10;

}
