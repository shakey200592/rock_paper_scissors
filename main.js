// Variables

const choices = ["rock", "paper", "scissors"]; // Store choices in a string array

let computer_score;
let player_score;

console.log(getWinner(getComputerChoice(choices), getHumanChoice(choices)));


function getComputerChoice(arr_of_choices) {
  // This function returns a random string from the values stored in the "choices" array

  // Select random number between 0 and 2
  let randomeChoice = Math.floor(Math.random() * arr_of_choices.length); 

  // Returns string based on the "arr_of_choices" parameter
  // and returns a string with the first char capitalised
  return randomeChoice;
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

function getWinner(computer_choice, player_choice)
{
  // draw, return 0
  if (computer_choice == player_choice)
  {
    console.log(`Computer choice (${computer_choice}): ${choices[computer_choice]}\nPlayer Choice (${player_choice}): ${choices[player_choice]}\nDraw`);
    return 0;
  }

  // computer=rock and player=paper (player wins, return 2)
  else if (computer_choice == 0 && player_choice == 1 )
    {
      console.log(`Computer choice (${computer_choice}): ${choices[computer_choice]}\nPlayer Choice (${player_choice}): ${choices[player_choice]}\n Player Wins`);
      return 2;
    }

  // computer=rock and player=scissors (computer wins, return 1)
  else if (computer_choice == 0 && player_choice == 2 )
    {
      console.log(`Computer choice (${computer_choice}): ${choices[computer_choice]}\nPlayer Choice (${player_choice}): ${choices[player_choice]}\n Computer Wins`);
      return 1;
    }

  // computer=paper and player=rock (player wins, return 2)
  else if (computer_choice == 1 && player_choice == 2 )
    {
      console.log(`Computer choice (${computer_choice}): ${choices[computer_choice]}\nPlayer Choice (${player_choice}): ${choices[player_choice]}\n Player Wins`);
      return 2;
    }

  // computer=rock and player=scissors (player wins, return 2)
  else if (computer_choice == 0 && player_choice == 2 )
    {
      console.log(`Computer choice (${computer_choice}): ${choices[computer_choice]}\nPlayer Choice (${player_choice}): ${choices[player_choice]}\n Player Wins`);
      return 2;
    }

    // computer=scissors and player=rock (player wins, return 2)
  else if (computer_choice == 2 && player_choice == 0 )
    {
      console.log(`Computer choice (${computer_choice}): ${choices[computer_choice]}\nPlayer Choice (${player_choice}): ${choices[player_choice]}\n Player Wins`);
      return 2;
    }

  // computer=scissors and player=paper (computer wins, return 2)
  else if (computer_choice == 2 && player_choice == 2 )
    {
      console.log(`Computer choice (${computer_choice}): ${choices[computer_choice]}\nPlayer Choice (${player_choice}): ${choices[player_choice]}\n Computer Wins`);
      return 1;
    }
}
