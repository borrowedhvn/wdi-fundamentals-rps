////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    if move !== null { // If a `move` has a value, your expression should evaluate to that value.
        return move;
    } else { // However, if `move` is not specified / is null, your expression should equal `getInput()`.
        return getInput();
    }
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    if move !== null { // If a `move` has a value, your expression should evaluate to that value.
        return move;
    } else { // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
        return randomPlay();
    }
}

function getWinner(playerMove,computerMove) {
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    var winner;  
    if (playerMove === "rock") {
        switch (computerMove) {
            case "rock":
                winner = "tie";
                break;
            case "paper":
                winner = "computer"
                break;
            case "scissors":
                winner = "player"
                break;
            default:
                winner = "Someone didn't pick! 1...2...3..."
        }
    } else if (playerMove === "paper") {
         switch (computerMove) {
            case "rock":
                winner = "player";
                break;
            case "paper":
                winner = "tie"
                break;
            case "scissors":
                winner = "computer"
                break;
            default:
                winner = "Someone didn't pick! 1...2...3..."
        }
    } else if (playerMove === "scissors") {
         switch (computerMove) {
            case "rock":
                winner = "computer";
                break;
            case "paper":
                winner = "player"
                break;
            case "scissors":
                winner = "tie"
                break;
            default:
                winner = "Someone didn't pick! 1...2...3..."
        }
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}


