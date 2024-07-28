let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
//console.log(choices);
const msg=document.querySelector("#msg");
//console.log(msg);
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");


//for userchoice we used addeventlistener
choices.forEach((choice)=>{
   // console.log(choice);
    choice.addEventListener("click",()=>
    {
        const userChoice=choice.getAttribute("id");
        //console.log("choice is clicked");
        playGame(userChoice);
    });
});

//for computer choice we used a fxn
const genCompChoice=()=>{
    const options=["Rock","Paper","Scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

//to fight between both we created this fxn
const playGame=(userChoice)=>{
    //console.log("user choice :",userChoice);
    const compChoice=genCompChoice();
    //console.log("comp choice:",compChoice);

    if(userChoice==compChoice)
        {
            //draw condition
            drawGame();
        }
    else{
        let userWin=true; 
        if(userChoice=="Rock"){
        //comp has choices: scissor, paper
        //if comp=scissor then userwin=false
        //if comp=paper then userwin=true
            userWin=compChoice=="Paper" ? false:true;
        }
        else if(userChoice=="Paper"){
            //comp has=rock,scissor
            userWin=compChoice=="Scissor" ? false:true;
        }
        else{
            //comp has=rock,paper
            userWin=compChoice=="Rock" ? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

//for draw condition
const drawGame=()=>{
   // console.log("Game is draw");
    msg.innerText="Game is Draw, Play again!";
    msg.style.backgroundColor="#081b31";
};

//for showwinner condition
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        //console.log("you win!!");
        msg.innerText=`You Win!! Your choice ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
       // console.log("you lose!");
        msg.innerText=`You Lose! ${compChoice} beat your choice ${userChoice}`;
        msg.style.backgroundColor="red";

    }
}; 


