// Variables
const choices = ["rock", "paper", "scissors"]; // Store choices in a string array
let computerScore = 0;
let playerScore = 0;


// Create Rock Paper Scissor UI using JS only
function createElement(parentElement, childElement, className ="", idName ="", textContent = "") {
  parentElement = document.querySelector(parentElement);
  childElement.textContent = textContent;
  childElement = document.createElement(childElement);


  if (className == "" && idName == "") {
    childElement.textContent = textContent;
    return parentElement.appendChild(childElement);
  }

  else if (className !== "" && idName == "") {
    childElement.setAttribute("class", className);
    childElement.textContent = textContent;
    return parentElement.appendChild(childElement);

  }

  else {
    childElement.setAttribute("class", className);
    childElement.setAttribute("id", idName);
    childElement.textContent = textContent;
    return parentElement.appendChild(childElement);

  }

}

// Create required Elements, classes/ids and text content
createElement("body", "div", "button-container"); // <div class = "game-container">
createElement("div", "button", "rock", "", "Rock"); // <button id="rock">
createElement("div", "button", "paper", "", "Paper"); // <button id="paper">
createElement("div", "button", "scissors", "", "Scissors"); // <button id="scissors">

createElement("body", "div", "score-container", "player-text", "Player Wins: ");
createElement("body", "div", "score-container", "computer-text", "Computer Wins: ");
createElement("body", "div", "score-container", "draw-text", "Draws: ");


















/*

// Functions for game functionality
function getComputerChoice(arr_of_choices) {
  // This function returns a random string from the values stored in the "choices" array

  // Select random number between 0 and 2
  let randomeChoice = Math.floor(Math.random() * arr_of_choices.length); 

  // Returns string based on the "arr_of_choices" parameter
  // and returns a string with the first char capitalised
  return randomeChoice;
}

function playRound(computerChoice, playerChoice) {

  return (computerChoice == 0 && playerChoice == 1 || computerChoice == 1 && playerChoice == 2 || computerChoice == 2 && playerChoice == 0) ? 2 : 1;

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

*/
