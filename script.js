//declaring global variables
let playerPoints = 0;
let computerPoints = 0;

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
function round(player){
    let computer = computerChoice();

    //If player and computer picked the same, then tie
    if (player==computer) return `Tie! Both of you choosed ${player}!`

    if (player=="rock"&&computer=="paper") return computerWon(player, computer);
    else if (player=="rock") return playerWon(player, computer);

    if (player=="paper"&&computer=="scissors") return computerWon(player, computer);
    else if (player=="paper") return playerWon(player, computer);

    if (player=="scissors"&&computer=="rock") return computerWon(player, computer);
    else if (player=="scissors") return playerWon(player, computer);
}

//computer winning the round
function computerWon (player, computer) {
    computerPoints++;
    return `Computer won by choosing ${computer} over your ${player}`;
}

//player winning the round
function playerWon (player, computer) {
    playerPoints++;
    return `You won by choosing ${player} over computer's ${computer}`;
}

//Query selectors
const buttons = document.querySelectorAll('button');

const roundWinner = document.querySelector('#round_winner');
const gameWinner = document.querySelector('#game_winner');

const playerPointsRef = document.querySelector('#player');
const computerPointsRef = document.querySelector('#computer');

//Rock paper and scissors buttons starting round
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        roundWinner.textContent = round(button.id);
        playerPointsRef.textContent = `Player: ${playerPoints} Points!`;
        computerPointsRef.textContent = `Computer: ${computerPoints} Points!`;
        areWeStillPlaying();
    });
});

//If someone gets 5 points, announce the winner
function areWeStillPlaying () {
    if (playerPoints == 5) {
        gameWinner.textContent = `You won the game by ${playerPoints-computerPoints} points!`;        
        turnOffButtons();
    } else if (computerPoints == 5) {
        gameWinner.textContent = `Computer won the game by ${computerPoints-playerPoints} points!`;
        turnOffButtons();
    };
}

function turnOffButtons () {
    buttons.forEach((button) => {
        button.disabled = true;
    });
}