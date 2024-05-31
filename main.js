/////// Variables ///////
const choices = ["Rock", "Paper", "Scissors"]; // Store choices in a string array
let computerScore = 0;
let playerScore = 0;
let playerChoiceInt;
let playerChoiceString;
let randomeChoiceInt;
let randomeChoiceString;
let draws = 0;

/////// Functions ///////

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

function getplayerChoice () {
  const buttons = document.querySelectorAll(".choice");
  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      playerChoiceString = document.querySelector("#player-choice")
      playerChoiceString.textContent = `Player Choice: ${event.target.textContent}`;
      playerChoiceInt = choices.indexOf(event.target.textContent);
      console.log(`Player choice (${playerChoiceInt}): ${playerChoiceString.textContent}`);
      
    })
  })
}

// Functions for game functionality
function getComputerChoice(arr_of_choices) {
  // This function returns a random string from the values stored in the "choices" array

  const buttons = document.querySelectorAll(".choice");
  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      // Select random number between 0 and 2
      randomeChoiceInt = (Math.floor(Math.random() * arr_of_choices.length));
      randomeChoiceString = arr_of_choices[randomeChoiceInt];
      let computerChoiceText = document.querySelector("#computer-choice");
      computerChoiceText.textContent = `Computer Choice: ${randomeChoiceString}`;
      console.log(`Computer choice (${randomeChoiceInt}): ${computerChoiceText.textContent}`);
    })
  })
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




// Create required Elements, classes/ids and text content
createElement("body", "div", "button-container"); // <div class = "game-container">
createElement("div", "button", "choice", "rock", "Rock"); // <button id="rock">
createElement("div", "button", "choice", "paper", "Paper"); // <button id="paper">
createElement("div", "button", "choice", "scissors", "Scissors"); // <button id="scissors">
createElement("div", "button", "choice", "reset", "Reset Score"); 

createElement("body", "div", "score-container", "", "Scoreboard: "); // <div class = "score-container"></div>
createElement(".score-container", "p", "", "player-wins", `Player Wins: ${playerScore}`); // <p>Player Wins: {}</p>
createElement(".score-container", "p", "", "computer-wins", `Computer Wins: ${computerScore}`);// <p>Computer Wins: {}</p>
createElement(".score-container", "p", "", "draws", `Computer Wins: ${draws}`); //<p>Draws: <> </p>

createElement("body","p","","player-choice",`Player Choice:`);
createElement("body","p","","computer-choice",`Computer Choice:`);

// Play Game
getplayerChoice();
getComputerChoice(choices);




