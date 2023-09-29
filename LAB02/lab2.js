console.log("Join me for a game of Rock - Paper - Scissors\n");
var userEntry = prompt("What is your Choice R for rock, P for paper, or S for scissors ");
var userSelection = userEntry.toUpperCase();


var computerSelection = Math.random();
if (computerSelection < 0.34) {
    computerSelection = "P"
} else if (computerSelection > 0.34 && computerSelection <= 0.67) {
    computerSelection = "S"
} else if (computerSelection > 0.67 && computerSelection <= 1.0) {
    computerSelection = "R"
}

if (userSelection != "R" && userSelection != "P" && userSelection != "S") {
    console.log("Incorrect input, please enter one of the three letters: R for rock, P for paper, or S for scissors");
    userSelection;
}

var winnerSelection = function (userSelection, computerSelection) {


    if (userSelection == "R" && computerSelection == "R")
        console.log("It's a tie");
    else if (userSelection == "R" && computerSelection == "P")
        console.log("Computer Wins");
    else if (userSelection == "R" && computerSelection == "S")
        console.log("User Wins");

    else if (userSelection == "P" && computerSelection == "R")
        console.log("User Wins");
    else if (userSelection == "P" && computerSelection == "P")
        console.log("It's a tie");
    else if (userSelection == "P" && computerSelection == "S")
        console.log("Computer Wins");

    else if (userSelection == "S" && computerSelection == "R")
        console.log("Computer Wins");
    else if (userSelection == "S" && computerSelection == "P")
        console.log("User Wins");
    else if (userSelection == "S" && computerSelection == "S")
        console.log("It's a tie");
    else
        console.log("It's a tie");
}

console.log("Computer played " + computerSelection + "! ");
console.log("User Played " + userSelection + "! ");
winnerSelection(userSelection, computerSelection);
