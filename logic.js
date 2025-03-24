let userScore=0,compScore=0;
let userScorehtm=document.querySelector("#human-score");
let compScorehtm=document.querySelector("#comp-score");
let msg=document.querySelector("#msg");

const choices=document.querySelectorAll(".choice");

const genCompChoice=()=>{
    const options=["Rock","Paper","Scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

const updateScore = (result) => {
    if (result === "Win!") {
        userScore++;
        userScorehtm.innerText = userScore;
    }
    if (result === "Lose!") {
        compScore++;
        compScorehtm.innerText = compScore;
    }
};

const checkResult=(userChoice,compChoice)=>{
    let result;
    if(userChoice===compChoice){
        result="Draw!";
        msg.innerText="Game was Draw!";
        msg.style.backgroundColor="darkmagenta";
    }
    else if(userChoice==="Rock"&&compChoice==="Scissors"||userChoice==="Paper"&&compChoice==="Rock"||userChoice==="Scissors"&&compChoice==="Paper"){
        result="Win!";
        msg.innerText=`You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="blue";
    }
    else{
        console.log("You loss!");
        result="Lose!";
        msg.innerText=`You lost! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
    updateScore(result);
};

const playGame=(userChoice)=>{
    //console.log("User choice= ",userChoice);
    let compChoice=genCompChoice();
    //console.log("Computer choice= ",compChoice);
    checkResult(userChoice,compChoice);
};

choices.forEach((choice) => {
    //console.log(choice);
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
        //console.log("choice was clicked",userChoice);
        playGame(userChoice);
    })
});