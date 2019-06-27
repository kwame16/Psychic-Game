// Creates an array that lists out all of the options.
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

// var computerChoices = ["hello", "world", "earth"]


// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var wins = 0;
var losses = 0;
var Guessesleft = 9;

// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById('directions-text');
var userChoiceText = document.getElementById('userchoice-text');
// var computerChoiceText = document.getElementById('computerchoice-text');
var winsText = document.getElementById('wins-text');
var lossesText = document.getElementById('losses-text');
var guessesleftText = document.getElementById('guessesleft-text');

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log("before user types " + computerGuess);

// Display the user and computer guesses, and wins/losses/ties.
//   computerChoiceText.textContent = 'The computer chose: ' + computerGuess;
winsText.textContent = "wins: " + wins;
lossesText.textContent = "losses: " + losses;
guessesleftText.textContent = "guesses left: " + Guessesleft;

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {
    // Determines which key was pressed.
    var userGuess = event.key.toLowerCase();


    // if(userGuess === "r"|| userGuess || "p" || userGuess || "s"){
    if (userGuess === computerGuess) {

        wins = wins + 1;
        Guessesleft = 9;
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        // directionsText.textContent = "";

        // console.log("wins " + userGuess);
        console.log("wins " + computerGuess);

        // computerChoiceText.textContent = computerGuess;

    } else if ((userGuess != computerChoices) && (Guessesleft != 0)) {
        Guessesleft = Guessesleft - 1;
        console.log(userGuess === computerChoices);
        // console.log("try again " + userGuess);
        // console.log("try again " + computerGuess);
    } else {
        losses = losses + 1;
        Guessesleft = 9;
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        // console.log("lose " + userGuess);
        console.log("lose " + computerGuess);
    }




    // Display the user and computer guesses, and wins/losses/ties.
    userChoiceText.textContent = 'You chose: ' + userGuess;
    //   computerChoiceText.textContent = 'The computer chose: ' + computerGuess;
    winsText.textContent = 'wins: ' + wins;
    lossesText.textContent = 'losses: ' + losses;
    guessesleftText.textContent = 'guesses left: ' + Guessesleft;

    // if (userGuess !== 'r' || userGuess !== 's' || userGuess !== 'p') {
    //   return false;
    // }
    // Randomly chooses a choice from the options array. This is the Computer's guess.

    // Reworked our code from last step to use "else if" instead of lots of if statements.

    // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
    // if (userGuess === 'r' || userGuess === 'p' || userGuess === 's') {
    //   if (
    //     (userGuess === 'r' && computerGuess === 's') ||
    //     (userGuess === 's' && computerGuess === 'p') ||
    //     (userGuess === 'p' && computerGuess === 'r')
    //   ) {
    //     wins++;
    //   } else if (userGuess === computerGuess) {
    //     ties++;
    //   } else {
    //     losses++;
    //   }

    // Hide the directions
    //   directionsText.textContent = '';

    // Display the user and computer guesses, and wins/losses/ties.
    //   userChoiceText.textContent = 'You chose: ' + userGuess;
    //   computerChoiceText.textContent = 'The computer chose: ' + computerGuess;
    //   winsText.textContent = 'wins: ' + wins;
    //   lossesText.textContent = 'losses: ' + losses;
    //   tiesText.textContent = 'ties: ' + ties;
}