// Prompt if user wants to play a game
// function initialPrompt() {
//     let humanChoice = prompt("Oh yes! I can't wait to beat you at rock, paper scissors. Enter your selection in this box (rock, paper, or scissors). I promise I won't look.");
//     var computerChoice = getRandomInt(3);
// }

// console.log(initialPrompt.computerChoice);

// Win, loss counter
// var counter = {
//     winCounter: 0,
//     loseCounter: 0,
//     tieCounter: 0,
//     showCounter: function() {
//         console.log("You have won", this.winCounter, "times.", '\n', "You have lost", this.loseCounter, "times.", '\n',"You have tied", this.tieCounter, "times.")
//     }
// }

// Win, loss counter
var winCounter = 0;
var loseCounter = 0;
var tieCounter = 0;

// Human choice array
var choices = ["rock", "paper", "scissors"];

// Game function
var letsPlay = function() {
    // Present initial prompt
    var humanChoice = window.prompt("Oh, how exciting! I love to play games. Let's play a classic, rock, paper, scissors.\n\nEnter your selection below (either rock, paper, or scissors). I promise I won't look.")

    humanTranslate = humanChoice.toLowerCase();

    // Random computer choice
    var computerChoice = choices[Math.floor(Math.random()*choices.length)];

    // Code to check for a tie
    if (humanTranslate == computerChoice) {
        tieCounter++;
        // window.alert("Looks like we both chose ${humanChoice}. I guess great and not so great minds think alike 🙄")
        window.alert("Looks like we both chose " + humanTranslate + ". I guess great and not-so-great minds think alike 🙄 I'll beat you on the next one.")
        console.log(computerChoice);
    } else if (
        (humanTranslate == "rock" && computerChoice == "scissors") ||
        (humanTranslate == "scissors" && computerChoice == "paper") ||
        (humanTranslate == "paper" && computerChoice == "rock")
    ){
        winCounter++;
        // window.alert("What?! You beat me! ... I mean, lucky guess... Anyone could have picked ${humanChoice}")
        window.alert("What?! You beat me! ... I mean, lucky guess... Anyone could have picked " + humanTranslate + ". I'll definitely get you on the next one.")
        console.log(computerChoice);
    }
    else {
        loseCounter++;
        window.alert("Looks like you lost, " + humanTranslate + " was obviously the wrong choice")
        console.log(computerChoice);
    }

    window.alert("This is how you're doing against me:\n   Wins: " + winCounter + "\n   Losses: " + loseCounter + "\n   Ties: " + tieCounter);

    var playAgain = window.confirm("Do you want to play again? I won't be offended if you're scared.")

    if (playAgain) {
        letsPlay();
    }
    else {
        return;
    }
}

