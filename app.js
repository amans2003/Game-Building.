let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#Computer-score");

const genCompChoice = () =>{
    const options = ["rock","paper","scissor"];
   const randIdx = Math.floor(Math.random()*3);
   return options[randIdx]; 
};

const drawGame = () =>{
    // console.log("Game was Draw");
    msg.innerText = "Match Draw . Play again";
    msg.style.background = "Yellow";
    msg.style.color="Black";
};

const showWinner = (userWin ,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        // console.log("You Win !");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.background = "Green";
        msg.style.color="white";
    }else{
        compScore++;
        compScorepara.innerText = compScore;
        // console.log("You lose");
        msg.innerText = `You lost! Your ${compChoice} beats ${userChoice}`;;
        msg.style.background = "Red";
        msg.style.color="White";
    }
};

const playGame= (userChoice) =>{
    // console.log("user choice = ",userChoice);
    const compChoice = genCompChoice();
    // console.log("comp choice = ",compChoice);
    if(userChoice===compChoice){
        //Draw game
        drawGame();
    }else{
        let userWin = true;
        if(userChoice==="rock"){
            //scissor , paper
           userWin= compChoice==="paper"? false:true;
        }else if(userChoice==="paper"){
            //rock scissor
            userWin=compChoice ==="scissor"? false : true;
        }else{
            //paper rock
           userWin= compChoice ==="rock"? false:true;
        }
        showWinner(userWin , userChoice,compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
            playGame(userChoice);

    });
});