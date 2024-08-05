//using two variables, 1 for user score, 1 for comp score
let userScore =0;
let compScore =0;
const choices = document.querySelectorAll(".choice");
const msg =document.querySelector("#message");
const userScorePara = document.querySelector("#userScore");
const compScorePara = document.querySelector("#compScore");

//function for computer to generate random
const genCompChoice = () =>{
    //rock, paper , scissor
    const options=["rock", "paper", "scissors"];
    const x= Math.floor(Math.random()*3);
    return options[x];
}
const showWinner = (userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win");
        msg.innerText =`you win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you loose");
        msg.innerText =`you lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{  
    console.log("user choice = ", userChoice);
    //calling func to generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);
    if(userChoice===compChoice){
        console.log("DRAW GAME");
        msg.innerText ="DRAW - PLAY AGAIN ";
        msg.style.backgroundColor="rgb(81, 51, 106)";
    }
    else{
        let userWin=true;

        if(userChoice==="rock"){
            userWin= compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin= compChoice==="scissors"?false:true;
        }
        else if(userChoice==="scissors"){
            userWin= compChoice==="rock"?false:true;
        }
        showWinner(userWin, userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
   // console.log(choice);
    choice.addEventListener("click",()=>{  //event listener will track a click jiske baad function chale ga
        const userChoice = choice.getAttribute("id"); 
        console.log("choice was clicked", choice);
        playGame(userChoice);
    });
}); 