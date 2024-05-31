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

function getComputerChoice(arr_of_choices) {
  randomChoiceInt = (Math.floor(Math.random() * arr_of_choices.length));
  randomChoiceString = arr_of_choices[randomChoiceInt];
  let computerChoiceText = document.querySelector("#computer-choice");
  computerChoiceText.textContent = `Computer Choice : ${randomChoiceString}`;
  console.log(`Computer choice (${randomChoiceInt}): ${choices[randomChoiceInt]}`)
  return randomChoiceInt;
}

function getPlayerChoice(event) {
  playerChoiceString = document.querySelector("#player-choice")
  playerChoiceString.textContent = `Player Choice: ${event.target.textContent}`;
  playerChoiceInt = choices.indexOf(event.target.textContent);
  console.log(`Player choice (${playerChoiceInt}): ${choices[playerChoiceInt]}`)
  return playerChoiceInt;
}

function getWinner(computerChoice, playerChoice) {
  let winner;

  if (computerChoice == playerChoice) {
    return 0;
  }
  else {
    winner = computerChoice = 0 && playerChoice == 1 ||
     computerChoice == 1 && playerChoice == 2 ||
      computerChoice == 2 && playerChoice == 0 ? 2 : 1;
      return winner;
  }


}

// Functions for game functionality
function playRound() {
  // This function returns a random string from the values stored in the "choices" array

  const buttons = document.querySelectorAll(".choice");
  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {

      let computerChoiceInt = getComputerChoice(choices);
      let playerChoiceInt = getPlayerChoice(event);

      console.log(getWinner(computerChoiceInt, playerChoiceInt));

    })
  })
}




// Create required Elements, classes/ids and text content
createElement("body", "div", "button-container"); // <div class = "game-container">
createElement("div", "button", "choice", "rock", "Rock"); // <button id="rock">
createElement("div", "button", "choice", "paper", "Paper"); // <button id="paper">
createElement("div", "button", "choice", "scissors", "Scissors"); // <button id="scissors">
createElement("div", "button", "reset", "reset", "Reset Score"); 

createElement("body", "div", "score-container", "", "Scoreboard: "); // <div class = "score-container"></div>
createElement(".score-container", "p", "", "player-wins", `Player Wins: ${playerScore}`); // <p>Player Wins: {}</p>
createElement(".score-container", "p", "", "computer-wins", `Computer Wins: ${computerScore}`);// <p>Computer Wins: {}</p>
createElement(".score-container", "p", "", "draws", `Draws: ${draws}`); //<p>Draws: <> </p>

createElement("body","div","messages");
createElement(".messages","p","messages","player-choice",`Player Choice:`);
createElement(".messages","p","messages","computer-choice",`Computer Choice:`);

createElement(".messages","p","messages","round-winner");

// Play Game
playRound(choices);




