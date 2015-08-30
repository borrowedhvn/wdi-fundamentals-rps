////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
} // closes getInput
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
} // closes randomPlay
////////////////////////////////////////////////
/*           Game Play Instructions           */
////////////////////////////////////////////////

function getPlayerMove(move) {
    if (move !== null) {
        return move;
    } else {
        return getInput();
    }
} // closes getPlayerMove

function getComputerMove(move) {
    if (move !== null) {
        return move;
    } else {
        return randomPlay();
    }
} // closes getComputerMove

function getWinner(playerMove, computerMove) {
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
                winner = "computer";
                break;
            case "scissors":
                winner = "player";
                break;
            default:
                winner = "Someone didn't pick!";
        } //closes switch
    } else if (playerMove === "paper") {
         switch (computerMove) {
            case "rock":
                winner = "player";
                break;
            case "paper":
                winner = "tie";
                break;
            case "scissors":
                winner = "computer";
                break;
            default:
                winner = "Someone didn't pick!";
        } // closes switch
    } else if (playerMove === "scissors") {
         switch (computerMove) {
            case "rock":
                winner = "computer";
                break;
            case "paper":
                winner = "player";
                break;
            case "scissors":
                winner = "tie";
                break;
            default:
                winner = "Someone didn't pick!";
        } // closes switch
    } // closes else if
    return winner;
} // closes getWinner

////////////////////////////////////////////////
/*           Play to Five                     */
////////////////////////////////////////////////

function playToFive() {
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

    while (playerWins < 5 && computerWins < 5) {
        var player = getInput();
        var computer = randomPlay();
        var roundWinner = getWinner(getPlayerMove(player), getComputerMove(computer));
        if (roundWinner === "player") {
            playerWins += 1;
            console.log('Player wins!');
        } else if (roundWinner === "computer") {
            computerWins += 1;
            console.log('Computer wins!');
        } else if (roundWinner === "tie") {
            console.log("It's a tie");
        } else {
            console.log("Invalid player input. Please select rock, paper or scissors");
        }// closes if...else
    } // closes while loop
    console.log("Game over! You won " + playerWins + " times. The computer won " + computerWins + " times.");
} // closes PlayToFive

////////////////////////////////////////////////
/*           Play to X                    */
////////////////////////////////////////////////

function bestOf() {
    console.log("How many wins ends the game?");
    return prompt();
} // closes bestOf

function playToX() {
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    console.log("Let's play Rock, Paper, Scissors");
    var endGame = parseInt(bestOf());
    var playerWins = 0;
    var computerWins = 0;

    while (playerWins < endGame && computerWins < endGame) {
        var player = getInput();
        var computer = randomPlay();
        var roundWinner = getWinner(getPlayerMove(player), getComputerMove(computer));
        if (roundWinner === "player") {
            playerWins += 1;
            console.log('Player wins!');
        } else if (roundWinner === "computer") {
            computerWins += 1;
            console.log('Computer wins!');
        } else if (roundWinner === "tie") {
            console.log("It's a tie");
        } else {
            console.log("Invalid player input. Please select rock, paper or scissors");
        } // closes if...else
    } // closes while loop

    console.log("Game over! You won " + playerWins + " times. The computer won " + computerWins + " times.");
} // closes playToX

////////////////////////////////////////////////
/*          Play Rock Paper Scissors          */
////////////////////////////////////////////////

playToX();