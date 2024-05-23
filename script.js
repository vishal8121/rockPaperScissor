let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const getCompChoice = () =>{
   //rock paper scissors
   const options = ["rock","paper","scissors",]
   const randIdx = Math.floor(Math.random()*3);
   return options[randIdx]

}

const scoreUpdate = (score) => {
    if(score == userScore){
        let updatedScore = document.getElementById("userScore");
        updatedScore.innerText = userScore;
    }
    else{
        let updatedScore = document.getElementById("compScore");
        updatedScore.innerText = compScore;
    }

}

const drawGame = () =>{
    console.log("Draw Game");
    const msg = document.getElementById("message");
    msg.innerText = "Draw Game";
    msg.style.backgroundColor = "blue";
}

const showWinners = (userWin) =>{
    if(userWin){
        const msg = document.getElementById("message");
        msg.innerText = "You won";
        msg.style.backgroundColor = "green";
        console.log("User Win")
        userScore++;
        console.log(userScore);
        scoreUpdate(userScore)
    }
    else{
        console.log("User Lose");
        const msg = document.getElementById("message");
        msg.innerText = "You Lose";
        msg.style.backgroundColor = "red";
        compScore++;
        scoreUpdate(compScore)
    }

}

const playGame = (userChoice) =>{
console.log("userChoice: " + userChoice);
// generate computer choice
const computerChoice = getCompChoice();
console.log("compChoice: " + computerChoice);

  if(userChoice == computerChoice){
    // draw game
    drawGame();
  }
  else{
    let userWin = true;
    if(userChoice == "rock"){
        // scissor paper
        userWin = computerChoice === "paper" ? false : true;
    }
    else if(userChoice === "paper"){
        // rock scissor
        userWin = computerChoice === "rock" ? true : false;
    }
    else{
        // paper rock
        userWin = computerChoice === "paper" ? true : false;
    }
    showWinners(userWin);
  }
  
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})
