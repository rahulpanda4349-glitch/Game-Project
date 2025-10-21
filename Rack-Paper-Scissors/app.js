let userScore=0;
let compScore=0;
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const msg=document.querySelector("#message");
const message=document.querySelector(".msg");
const choices=document.querySelectorAll(".choice");
const showWinner=(userWin,userchoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You win! Your ${userchoice} beats ${compChoice}`;
        message.style.backgroundColor="green";
    }
    else{
         compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You Lose! ${compChoice} beats your ${userchoice}`
        message.style.backgroundColor="red";
    }
}
const drawGame=()=>{
     msg.innerText="Game was draw play again.";
     message.style.backgroundColor="yellow";
     message.style.color="black";
}
const genCompChoice=()=>{
    let options=['rock',"paper","scissors"];
    let num=Math.floor(Math.random()*3);
    return options[num];
}
const playGame=(userchoice)=>{
    //Generate computer choice
    const compChoice=genCompChoice();
    if(userchoice===compChoice){
        drawGame();
    } 
    else{
        let userWin=true;
        if(userchoice==="rock"){
          userWin=compChoice==="paper"?false:true;
        } 
        else if(userchoice==="paper"){
            userWin=compChoice==="rock"?true:false;
        }
        else{
            userWin=compChoice==="rock"?true:false;
        }
        showWinner(userWin,userchoice,compChoice);
    }
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playGame(userchoice);
    });
});