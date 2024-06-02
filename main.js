/////// Variables ///////
const choices = ["Rock", "Paper", "Scissors"]; // Store choices in a string array
let computerScore = 0;
let playerScore = 0;
let playerChoiceInt;
let randomChoiceInt;
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

function getComputerChoice(arr_of_choices) {
  randomChoiceInt = (Math.floor(Math.random() * arr_of_choices.length));
  return randomChoiceInt;
}

function getPlayerChoice(event) {
  let playerChoiceString = event.target.textContent;
  return choices.indexOf(playerChoiceString);
  
}

function getWinner(computerChoice, playerChoice) {

  if (computerChoice == playerChoice) {
    return 0;
  }
  else {
    return computerChoice == 0 && playerChoice == 1 ||
     computerChoice == 1 && playerChoice == 2 ||
      computerChoice == 2 && playerChoice == 0 ? 2 : 1;
  }


}

function updateScore(winner) {
  if (winner == 0) {
    draws++;
    document.querySelector("#draws").textContent = `Draws: ${draws}`;
  }

  else if (winner == 1) {
    computerScore++;
    document.querySelector("#computer-wins").textContent = `Computer Wins: ${computerScore}`;
  }

  else if (winner == 2) {
    playerScore++;
    document.querySelector("#player-wins").textContent = `Player Wins: ${playerScore}`;
  }

  const reset = document.querySelector(".reset");

  reset.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    draws = 0;
    document.querySelector("#player-wins").textContent = `Player Wins: ${playerScore}`
    document.querySelector("#computer-wins").textContent = `Computer Wins: ${computerScore}`
    document.querySelector("#draws").textContent = `Draws: ${draws}`

  })

  
}

// Functions for game functionality
function playRound() {
  const buttons = document.querySelectorAll(".choice");

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {

      let computerChoiceInt = getComputerChoice(choices);
      let playerChoiceInt = getPlayerChoice(event);
      let winner = getWinner(computerChoiceInt,playerChoiceInt);
      updateScore(winner);
      console.log(`Computer Choice: (${computerChoiceInt}): ${choices[computerChoiceInt]}\n
Player Choice (${playerChoiceInt}): ${choices[playerChoiceInt]}`);

    })
  })
}




// Create required elements, classes/ids and text content
createElement("body", "div", "button-container"); // <div class = "game-container">
createElement("div", "button", "choice", "rock", "Rock"); // <button id="rock">
createElement("div", "button", "choice", "paper", "Paper"); // <button id="paper">
createElement("div", "button", "choice", "scissors", "Scissors"); // <button id="scissors">
createElement("div", "button", "reset", "reset", "Reset Score"); // <button id="reset">

createElement("body", "div", "score-container", "", "Scoreboard: "); // <div class = "score-container"></div>
createElement(".score-container", "p", "", "player-wins", `Player Wins: 0`); // <p>Player Wins: {}</p>
createElement(".score-container", "p", "", "computer-wins", `Computer Wins: 0`);// <p>Computer Wins: {}</p>
createElement(".score-container", "p", "", "draws", `Draws: 0`); //<p>Draws: <> </p>

// Play Game
playRound(choices);




