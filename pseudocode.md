## Rock, Paper, Scissors Pseudocode

### Functionality
- Human input for RPS
- Random computer choice
- Ability to replay the computer after a win, loss, or tie
- Counter to keep track of human and computer W:L
- Must use the following commands:
    - alert()
    - confirm()
    - prompt()

### Elements needed:
- var humanChoice = [r, p ,s]
- var computerChoice = random[r, p, s]
- var continuePlay = [TRUE, FALSE]
- var winCounter = 0++
- var loseCounter = 0++
- var tieCounter = 0++

### Game function:
function playGame() { 
    on site load: var humanChoice selection
    var computerChoice selection
    var continuePlay = 0;
    if (humanChoice beats computerChoice) {
        winCounter++;
        console.log("Yay, you beat the computer! You chose", humanChoice, "and the computer chose", computerChoice);
        console.log("You have won", winCounter, "times. You have lost", loseCounter, "times. You have tied", tieCounter, "times.");
        console.log("Would you like to play again?", True, False);
            if (countinuePlay) {
                rerun function;
            }
            else {
                return;
            }        
    }
    else if (humanChoice loses computerChoice) {
        loseCounter++;
        console.log("Ouch, you lost to the computer! You chose", humanChoice, "and the computer chose", computerChoice);
        console.log("You have won", winCounter, "times. You have lost", loseCounter, "times. You have tied", tieCounter, "times.");
        console.log("Would you like to play again?", True, False);
            if (countinuePlay) {
                rerun function;
            }
            else {
                return;
            }        
    }
    else {
        tieCounter++
        console.log("You tied! You both chose", humanChoice);
        console.log("You have won", winCounter, "times. You have lost", loseCounter, "times. You have tied", tieCounter, "times.");
        console.log("Would you like to play again?", True, False);
            if (countinuePlay) {
                rerun function;
            }
            else {
                return;
            }        
    }
}