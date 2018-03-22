// +(function(){

// })();

//Start Game, collect player info & add it to H1 Element.
	let playerName = prompt("What is your name, Raidbabe?");
	let headerUpdate = document.getElementsByTagName("h1")[0].textContent + "<strong>" + playerName + "</strong>";
	document.getElementsByTagName("h1")[0].innerHTML = headerUpdate;

//Intializes the game upon instance.
	function gameStart(){};
			let score = 0;
			let lives = 10;
		
	
//Set up the alphabet and key phrases. Initialize them to the document.
	let alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	let phrases = [
	"I am the CrazyBobbles",
	"Zef is Canadian",
	"Bowbe loves to leave orbit",
	"Harold is our Mascot",
	"Katt Loves Books",
	"Skilks has a new job",
	"Crftsy is a son of a bitch",
	"Moe and Liar are computer gods",
	"Kye Makes Bread",
	"Crittxr loves dogs",
	"Corg is alright",
	"Jules loves Carly"
	];

//Get random phrase from phrases
	function randomPhrase (phrases){
	return phrases[Math.floor(Math.random()*phrases.length)];
	}
	let secretArray = randomPhrase(phrases);
	//To remove case issue
	secretArray = secretArray.toUpperCase();


//Display details for alphabet
	//secret phrase with blanks 
	let answerArray = [];
	const remainingLetters = secretArray.length
	let remainingSpaces = 0;
	for (let i=0;i<secretArray.length; i++){
		answerArray[i] = " _ ";
		//Put Blank spaces and count them.
		if(secretArray[i] === " "){
			answerArray[i] = "\\"
			remainingSpaces ++;
			} 
		}
	let guessedLetters = remainingLetters - remainingSpaces;

	//HangmanPictures
	var img = document.createElement("img");
	img.src = "C:/Users/consu/Documents/codingProjects/Hangman/hangman.png";

	var src = document.getElementById("display");
	src.insertBefore(img, document.getElementById("secretWord"));
	

//Get players guess
	function playerGuess(){ 
	let guess = prompt('Guess a Letter? or click cancel to stop playing');
		guess = guess.toUpperCase();
	let counter = 0;
	//let guess = document.getElementById("guess")[0].textContent;

	//Take the guess,check if it is valid, and run it against the secret word.
	if (guess.length === null){
		alert("This is not a correct guess!");
		}else if (guess.length !== 1){
		alert("This is not a correct guess!");
		} else if (parseInt(guess)){
		alert("This is not a correct guess!");
		} else {
		for (let i=0;i<secretArray.length; i++){
			//check if guess is equal to string[i]
			if (guess === secretArray[i]){
				answerArray[i] = guess;
				counter++;
				guessedLetters--;
				displayValues();
				console.log(counter);


			}
		}
		//Player loses a life if the letter was not in the secret word.
			if (counter === 0){
				alert("There were no " + guess + " in the puzzle; You lose a life!");
				lives--;

		}

	   }
	   //Take random spin and add points to the total score;
		let roundPoints = spinScore(counter);
			console.log(roundPoints);
			score += roundPoints;
			console.log(score);
		//Remove letter from alphabet array.
			for (let i=0; i<alphabet.length; i++){
			if (guess === alphabet[i]){
				alphabet.splice(i,1);
				displayValues();
				}
			}

			gameConditions();
	 }
	
//Display text
	function displayValues(){
	document.getElementById("alphabet").innerHTML = alphabet;
	document.getElementById("alphabet").innerHTML = alphabet.join(" ");
	document.getElementById("secretWord").innerHTML = answerArray;
	document.getElementById("secretWord").innerHTML = answerArray.join(" ");
	document.getElementById("score").innerHTML = "Total Score: " + score;
	document.getElementById("lives").innerHTML = "Lives Remaining: " + lives;
	};
//Initilize Button to starts playerGuess
	let spinButton = document.getElementById("Spin");
	spinButton.onclick = function() {playerGuess();};

//create spin score wheel
function spinScore(guess){
	let spinValue = Math.floor(Math.random() * 1000);
	return spinValue * guess;
}

//Solve Puzzle
function solvePuzzle(){
	alert("Be careful babe, every wrong letter will cost you a life.");
	let solveAnswer = prompt("What do you think the secret phrase is?");
	//playerGuess(solveAnswer);
}
//Solve Button
let solveButton = document.getElementById("Solve");
solveButton.onclick = function (){solvePuzzle()};

//universal button selector(Listner for click then grab event and find id element, then run function based on selection)

//If guessletters = 0 || lives = 0 game over
function gameConditions(){
	if (guessletters = 0){
	alert("BABE YOU WON! You are a deadly babe that racked up over " + score + "points!");
	} else if (lives = 0){
	alert("You are not good at this game babe. Try again soon. You scored 0 points.")
	} else
	console.log("still alive babe.... Keep going!")
}








//Start game until done properly.
displayValues();



// while (remainingLetters > 0) {


// }
//End Game Congratulations or Sad Face. Points.