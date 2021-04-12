//declaring global variables
let playerPoints;
let computerPoints;

//script for random number in range
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//computer gets rock, paper or scissors randomly
function computerChoice(){
    let numericChoice = getRandomInt(1,3);
    let computerChoiceVar;
    if (numericChoice==1) {computerChoiceVar="rock"}
    if (numericChoice==2) {computerChoiceVar="paper"}
    if (numericChoice==3) {computerChoiceVar="scissors"}
    return computerChoiceVar;
}

//round needs player choice and computer choice to see who wins,
function round(){
    //player chooses rock, paper or scissors
    let player = prompt("Choose rock, paper or scissors").toLowerCase();
    let computer = computerChoice();

    //if player is rock
    if (player=="rock") {

       if (computer=="rock") return "Tie";

       if (computer=="paper") {
            computerPoints++;
            return "Computer won this round!";
        }

        if (computer=="scissors") {
            playerPoints++;
            return "You won this round";
        }
    }

    //if player is paper
    if (player=="paper") {

        if (computer=="rock") {
            playerPoints++;
            return "You won this round";
        }

        if (computer=="paper") return "Tie";

        if (computer=="scissors") {
            computerPoints++;
            return "Computer won this round";
        }
    }

    //if player is scissors
    if (player=="scissors") {

        if (computer=="rock") {
            computerPoints++;
            return "Computer won this round";
        }

        if (computer=="paper") {
            playerPoints++;
            return "You win this round";
        }

        if (computer=="scissors") return "Tie";
    }
}

//game is 5 rounds long, each round returns who won and points
//after 5 rounds return points and pick winner
function game() {
    //initVal to 0 points
    playerPoints=0;
    computerPoints=0;

    for (i=0; i<5; i++){
        console.log(round());
        console.log("Player have "+playerPoints+" points!")
        console.log("Computer have "+computerPoints+" points!")
        console.log(" ")
    }

    //Announcing the winner
    if (playerPoints>computerPoints) return "Player won the game!";
    else if (playerPoints<computerPoints) return "Computer won the game!";
    else return "You tied the game!";
}