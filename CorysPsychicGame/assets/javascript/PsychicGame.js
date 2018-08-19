
let computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];



let wins = 0;
let losses = 0;
let guessesLeft = 9;
let letterGuessed = [];
let compGuess = [];



window.onload = function() {
	let compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	compGuess.push(compGuess);
	console.log(compGuess[0]);
}


document.onkeyup = function(event) {
	let playerGuess = event.key;
	letterGuessed.push(playerGuess);
	console.log(compGuess[0]);

if ((playerGuess === compGuess[0]) && (guessesLeft > 0)) {
	wins++;
	guessesLeft = 9;
	letterGuessed.length = 0;
	compGuess.length = 0;
	let compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	compGuess.push(compGuess);
	console.log(compGuess[0]);
}

else if ((playerGuess !== compGuess[0]) && (guessesLeft > 0)) {
	guessesLeft = guessesLeft-1;
}

else {
	losses++;
	guessesLeft = 9;
	letterGuessed.length = 0;
	compGuess.length = 0;
	let compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	compGuess.push(compGuess);
	console.log(compGuess[0]);
}

let html = "<p>Guess what letter I'm thinking of!</p>" +
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Guesses left: " + guessesLeft + "</p>" +
          "<p>Your guesses so far: " + letterGuessed + "</p>";
 
document.querySelector("#game").innerHTML = html;

}