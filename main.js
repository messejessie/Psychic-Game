//Global Variables:
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var rando = math.floor(math.random()*26)
var validate = '';
var wins = 0;
var lose = 0;
var gusss = 0;
var guessLeft = 9;

//User Typing Letter:
document.onkeyup = function (event) {
    var userGuess = event.key;

    //User Types letter:
    alphabet.indexOf(userGuess) = validate
     if(validate == -1){
         alert("Invaild Key Option")
     }
     console.log(validate)
         }

    //Computer Guess 
    computerGuess = alphabet[rando]


