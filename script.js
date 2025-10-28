let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#userScore");
const compScorePara = document.querySelector("#compScore");
const resetBtn = document.querySelector("#reset-btn");

const gameDraw = () => {
    msg.innerText = "Game was a Draw. Play again.";
    msg.style.backgroundColor = "#343A40";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};


choices.forEach((choice) => {
    // Add a click event listener to each choice element
    choice.addEventListener('click', () => {
        const userChoice = choice.querySelector("img").id.toLowerCase();
        console.log(`User choice = ${userChoice}`);
        playGame(userChoice);
    });
});

const playGame = (userChoice) => {
    // Generate the computer's random choice
    const compChoice = genCompChoice();
    console.log(`Computer choice = ${compChoice}`); 
    if(userChoice === compChoice){
        gameDraw();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            // computer: paper, scissors
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper"){
            // computer: rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else { // user: scissors
            // computer: rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

const genCompChoice = () => {
    const options = ['rock', 'paper', 'scissors']; 
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const resetGame = () => {
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;
    msg.innerText = "Choose your move";
    msg.style.backgroundColor = "#343A40";
};

resetBtn.addEventListener("click", resetGame);
