function getComputerChoice(arr_of_choices) {
  // This function returns a random string from the values stored in the "choices" array

  // Select random number between 0 and 2
  let randomeChoice = Math.floor(Math.random() * arr_of_choices.length); 

  // Returns string based on the "arr_of_choices" parameter
  // and returns a string with the first char capitalised
  return `Computer Choice (${randomeChoice}): ${capitalise_first_letter(choices[randomeChoice])}`;
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
  return `Player Choice (${playerChoice}): ${capitalise_first_letter(choices[playerChoice])}`;
}

function capitalise_first_letter(string_to_capitalise)
{
  return (string_to_capitalise.charAt(0).toUpperCase()+string_to_capitalise.slice(1));
}

const choices = ["rock", "paper", "scissors"]; // Store choices in a string array
console.log(getComputerChoice(choices));
console.log(getHumanChoice(choices));


