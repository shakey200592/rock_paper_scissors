function getComputerChoice() {
  // This function returns a random string from the values stored in the "choices" array

  const choices = ["rock", "paper", "scissors"]; // Store choices in a string array
  let randomeChoice = Math.floor(Math.random() * choices.length); // Select random number between 0 and 2
  return choices[randomeChoice]; // return one of the three values stores in the array based on the index
}

function getHumanChoice() {
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


