const choices = ["rock", "paper", "scissors"]; // Store choices in a string array

function getComputerChoice(arr_of_choices) {
  // This function returns a random string from the values stored in the "choices" array
  let randomeChoice = Math.floor(Math.random() * arr_of_choices.length); // Select random number between 0 and 2
  return `Computer Choice (${randomeChoice}): ${choices[randomeChoice].charAt(0).toUpperCase()+choices[randomeChoice].slice(1)}`; // return one of the three values stores in the array based on the index
}

function getHumanChoice(arr_of_choices) {
/* 
  This function returns a string based on the number that is input to the string.
  There is Error checking to ensure that only a number can be entered and keeps
  asking for an input until a correct value is entered (number between 0 and 2)
*/

  let playerChoice;

  do 
  {
    playerChoice = parseInt(prompt("Please enter a value between 0 and 2 (0 = Rock, 1 = Paper, 2 = Scissors)"));
  } while (isNaN(playerChoice) || playerChoice > 2 || playerChoice < 0);
  return playerChoice;
}


