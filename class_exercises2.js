const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
You are making a number guessing game.
The function will take in an answer and a guess.
If the guess is bigger than the answer, you will say "Too Big!"
If the guess is smaller than the answer, you will say "Too Small!"
If the guess is the answer, you will say "You win!"

//BONUS//
if the guess is within a range of 10, aside from too big or too small, you will also say "Close!"
EG answer is 15, and the user guesses between 5-25 like 22 -> "Too Big!" "Close!"

if the guess is within a range of 5, instead of "Close!", it will say "Almost there!"

BONUS 2x DIFFICULTY
set the number of guesses allowed to a variable outside of the function
set the number of guesses made to a variable outside of the function starting it at 0
everytime the function runs add 1 to the number of guesses made

add one more if statement under the 2nd readline question
if(numberOfGuessesMade >= numberOfGuessesAllowed){
  console.log("You lose!");
  readline.close();
}

This means you can close the game with both "quit" and losing
*/

//Planning://
//let answer = number//
// let guess = number//
//3 conditions://
//If guess> answer --> "Too Big!"//
//else if guess < answer --> "Too Small!"//
//else if guess===answer --> "You win!"//
//question: What is your answer? What is your guess? //



//determine a proper parameter variable name
function GuessingGame(answer, guess) {
  if (guess>answer){
    console.log("Too Big!");
  }else if(guess<answer){
    console.log("Too Small!");
  }else if (guess===answer){
    console.log("You win!");
  }
}


//determine a proper question to ask and the proper variable name for the answer
readline.question("What is the answer?", (AnswerInput) => {
  const answer=Number(AnswerInput);


  //make an infinite recall for guessing question
  function StartGame() {

    //determine a proper question to ask and the proper variable name for the user to guess
    readline.question("What is your guess? ", (GuessInput) => {

      const guess=Number(GuessInput)
      

      GuessingGame(answer, guess)

      //call your function here

      if (GuessInput === "quit") {
        readline.close();
      } else {
        StartGame();
      }
    });
  }

  StartGame();
});

//Easy to read and good structure - Cesaria
//Good naming convention as well - Cesaria Monforte
