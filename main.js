// Declaring all of the variables in the array
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// Declaring the wins, losses, and guessesLeft variables
var wins = 0,
    losses = 0;
var guessesLeft = 10;

// Computer Guess
var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

// User Function
document.onkeyup = function (event) {

    //User event 
    var userGuess = event.key;
    console.log(userGuess, computerGuess);

    // Defining wins

    if (userGuess === computerGuess) {
        wins++;
        console.log(wins);
    }

    //defining loss
    if (guessesLeft !== 10) {
        guessesLeft--;
        console.log(guessesLeft);
    }
    
    // Losses increase if all 10 guesses are wrong
    else if (guessesLeft === 0) {
        losses++;
        console.log(lossses);
    }

}

