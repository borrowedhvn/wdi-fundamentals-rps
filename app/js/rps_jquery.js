// Global Variables 
var playerWins = 0;
var computerWins = 0;
var round = 1;
var playerMove;
var computerMove;
var winner;
var endGame;

// Update Scoreboard 
function refreshScores() {
	$(".computer_score").html(computerWins);
	$(".player_score").html(playerWins);
	// endGame = parseInt(numberOfWins);
	if (playerWins >= endGame) {
		$(".modal-title").prepend("<h1 class='winner_message'>Yay! You Won!</h1>");
		$("#myModal").modal("show");
	} else if (computerWins >= endGame) {
		$(".modal-title").prepend("<h1 class='winner_message'>Game Over &ndash; Computer Won</h1>");
		$("#myModal").modal("show");
    }
}

function createHistoryRow(winner) {
	var historyRowData;
	historyRowData += "<tr><td>" + round + "</td>";

	if (winner === "player") {
		if (playerMove === "rock") {
			historyRowData += "<td class='playerDataCell win'><i class='fa fa-hand-rock-o'></i>Rock</td>";
		} else if (playerMove === "paper") {
			historyRowData += "<td class='playerDataCell win'><i class='fa fa-hand-paper-o'></i>Paper</td>";
		} else if (playerMove === "scissors") {
			historyRowData += "<td class='playerDataCell win'><i class='fa fa-hand-scissors-o'></i>Scissors</td>";
		}

		if (computerMove === "rock") {
			historyRowData += "<td class='computerDataCell'><i class='fa fa-hand-rock-o'></i>Rock</td></tr>";
		} else if (computerMove === "paper") {
			historyRowData += "<td class='computerDataCell'><i class='fa fa-hand-paper-o'></i>Paper</td></tr>";
		} else if (computerMove === "scissors") {
			historyRowData += "<td class='computerDataCell'><i class='fa fa-hand-scissors-o'></i>Scissors</td></tr>";
		}
	}

	if (winner === "computer") {
		if (playerMove === "rock") {
			historyRowData += "<td class='playerDataCell'><i class='fa fa-hand-rock-o'></i>Rock</td>";
		} else if (playerMove === "paper") {
			historyRowData += "<td class='playerDataCell'><i class='fa fa-hand-paper-o'></i>Paper</td>";
		} else if (playerMove === "scissors") {
			historyRowData += "<td class='playerDataCell'><i class='fa fa-hand-scissors-o'></i>Scissors</td>";
		}

		if (computerMove === "rock") {
			historyRowData += "<td class='computerDataCell win'><i class='fa fa-hand-rock-o'></i>Rock</td></tr>";
		} else if (computerMove === "paper") {
			historyRowData += "<td class='computerDataCell win'><i class='fa fa-hand-paper-o'></i>Paper</td></tr>";
		} else if (computerMove === "scissors") {
			historyRowData += "<td class='computerDataCell win'><i class='fa fa-hand-scissors-o'></i>Scissors</td></tr>";
		}
	}

	else if (winner === "tie") {
		if (playerMove === "rock") {
			historyRowData += "<td class='playerDataCell'><i class='fa fa-hand-rock-o'></i>Rock</td>";
		} else if (playerMove === "paper") {
			historyRowData += "<td class='playerDataCell'><i class='fa fa-hand-paper-o'></i>Paper</td>";
		} else if (playerMove === "scissors") {
			historyRowData += "<td class='playerDataCell'><i class='fa fa-hand-scissors-o'></i>Scissors</td>";
		}

		if (computerMove === "rock") {
			historyRowData += "<td class='computerDataCell'><i class='fa fa-hand-rock-o'></i>Rock</td></tr>";
		} else if (computerMove === "paper") {
			historyRowData += "<td class='computerDataCell'><i class='fa fa-hand-paper-o'></i>Paper</td></tr>";
		} else if (computerMove === "scissors") {
			historyRowData += "<td class='computerDataCell'><i class='fa fa-hand-scissors-o'></i>Scissors</td></tr>";
		}
	}

	$("tbody").append(historyRowData);
	round += 1;
}

// Random Play
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
    	computerMove = "rock";
        return "rock";
    } else if (randomNumber < 0.66) {
    	computerMove = "paper";
        return "paper";
    } else {
    	computerMove = "scissors";
        return "scissors";
    }
} 

// Get Winner
function getWinner(playerMove, computerMove) {
    if (playerMove === "rock") {
        switch (computerMove) {
            case "rock":
                winner = "tie";
                break;
            case "paper":
                computerWins += 1;
                winner = "computer";
                break;
            case "scissors":
                playerWins += 1;
                winner = "player";
                break;
            default:
                winner = "Someone didn't pick!";
        } //closes switch
    } else if (playerMove === "paper") {
         switch (computerMove) {
            case "rock":
                winner = "player";
                playerWins += 1;
                break;
            case "paper":
                winner = "tie";
                break;
            case "scissors":
                winner = "computer";
                computerWins += 1;
                break;
            default:
                winner = "Someone didn't pick!";
        } // closes switch
    } else if (playerMove === "scissors") {
         switch (computerMove) {
            case "rock":
                winner = "computer";
                computerWins += 1;
                break;
            case "paper":
                winner = "player";
                playerWins += 1;
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


$(document).ready (function() {

	$(".action_items").show();
	$("#change_wins_form").hide();

	// Set Number of Wins to End the Game
	// $("#change_wins_form").submit(function() {
	// var winInput = parseInt($("#numberOfWins").val());
	// 	// if ((winInput === NaN) || (winInput > 10)) {
	// 	// 	$(".action_items").hide();
	// 	// 	alert("Please pick a number between 1 and 10.");
	// 	// } else if (winInput <= 10) {
	// 	// 	console.log("entered");
	// 	// 	endGame = winInput;
	// 		$("#change_wins_form").slideUp("slow");
	// 	// 	$(".action_items").show();
	// 	// }; 
	// });

// Set Number of Wins to End the Game
	$("#change_wins_form").submit(function(e) {
		endGame = parseInt($("#numberOfWins").val());
		$("#change_wins_form").slideUp("slow");
	});


	 // Select Rock
	$("button.rock").click(function() {
		playerMove = "rock";
		var winner = getWinner(playerMove, randomPlay());
		createHistoryRow(winner);
		refreshScores();
	});

	// Select Paper
	$("button.paper").click(function() {
		playerMove = "paper";
		var winner = getWinner(playerMove, randomPlay());
		createHistoryRow(winner);
		refreshScores();
	});

	// Select Scissors
	$("button.scissors").click(function() {
		playerMove = "scissors";
		var winner = getWinner(playerMove, randomPlay());
		createHistoryRow(winner);
		refreshScores();
	});

	// New Game
	$("button.newgame").click(function() {
		playerWins = 0;
		computerWins = 0;
		// var numberOfWins;
		round = 1;
		$("tbody").html("");
		$(".winner_message").remove();
		refreshScores();
		$("#change_wins_form").slideDown("slow");
	});

});