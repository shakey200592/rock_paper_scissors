// Variables

const choices = ["rock", "paper", "scissors"]; // Store choices in a string array
let computerScore = 0;
let playerScore = 0;
let numberOfRounds = 5;


// Main game code
playGame(numberOfRounds);


// Functions for game functionality
function getComputerChoice(arr_of_choices) {
  // This function returns a random string from the values stored in the "choices" array

  // Select random number between 0 and 2
  let randomeChoice = Math.floor(Math.random() * arr_of_choices.length); 

  // Returns string based on the "arr_of_choices" parameter
  // and returns a string with the first char capitalised
  return randomeChoice;
}

function getPlayerChoice() {
/* 
  This function returns a number based on the string entered
  rock = 0, paper = 1, scissors = 2. input is case insensitive
  thanks to the .toLowerCase() in-built function.
*/
  let playerChoice;

  // Keeps asking for an input until it matches one of the values in choices array
  do 
  {
    playerChoice = prompt("Please type either 'rock', 'paper' 'scissors' (case insensitive)").toLowerCase();
  } while (choices.includes(playerChoice) == false)

  playerChoice = choices.indexOf(playerChoice);

  return playerChoice;
}

function playRound(computerChoice, playerChoice)
{
  // This function includes if statements for all possible outcomes and
  // outputs 0 for a draw 1 for computer win and 2 for a player win
  console.log(computerChoice);
  console.log(playerChoice);
  // draw, return 0
  if (computerChoice == playerChoice)
  {
    console.log(`Computer choice (${computerChoice}): ${choices[computerChoice]}\nPlayer Choice (${playerChoice}): ${choices[playerChoice]}\nDraw`);
    return 0;
  }

  // player wins, return 2
  else if (computerChoice == 0 && playerChoice == 1 || computerChoice == 1 && playerChoice == 2 || computerChoice == 2 && playerChoice == 0 )
    {
      console.log(`Computer choice (${computerChoice}): ${choices[computerChoice]}\nPlayer Choice (${playerChoice}): ${choices[playerChoice]}\nPlayer Wins`);
      return 2;
    }

  // computer wins, return 1
  else if (computerChoice == 0 && playerChoice == 2 || computerChoice == 1 && playerChoice == 0 || computerChoice == 2 && playerChoice == 1 )
    {
      console.log(`Computer choice (${computerChoice}): ${choices[computerChoice]}\nPlayer Choice (${playerChoice}): ${choices[playerChoice]}\nComputer Wins`);
      return 1;
    }
}

function updateScore()
{
  // This functions updates the player and computer scores for each round
  let game_winner = playRound(getComputerChoice(choices), getPlayerChoice());

  if (game_winner == 1)
    {
      computerScore++;
    }
  
  else if (game_winner == 2)
    {
      playerScore++;
    }
}

function playGame(numberOfRounds)
{
  /* This function loops through the updateScore() function depending on the value of the
     numberOfRounds parameter. for example numberOfRounds = 5 would create 5 rounds
  */
  for (let round = 0; round < numberOfRounds; round++)
    {
      console.log(`Round ${round+1}\n`) // Displays current round
      updateScore();
    }

    console.log(`Computer Score: ${computerScore}\nPlayer Score: ${playerScore}`)

    if (computerScore > playerScore)
      {
        console.log("Computer Wins!");
      }
    else if (computerScore < playerScore)
      {
        console.log("Player Wins!");
      }
    else if (computerScore == playerScore)
      {
        console.log("Draw!")
      }

}
