function getComputerChoice()
{
    // This function returns a random string from the values stored in the "choices" array

    const choices = ["rock","paper","scissors"]; // Store choices in a string array
    let randomeChoice = Math.floor((Math.random()*choices.length)); // Select random number between 0 and 3
    return choices[randomeChoice]; // return one of the three values stores in the array based on the index
}

