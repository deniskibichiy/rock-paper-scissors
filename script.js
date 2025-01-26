

//getting the computer choice
let computerChoice = function getComputerChoice (){


const number = Math.random(3);
if (number * 10 <= 3){
    computerChoice = "rock";
}
else if(number * 10 >= 3 || number <=7){
    computerChoice = "paper";
}

else if (number * 10 >= 7) {
    computerChoice = "scissors";
}

};


/*
function getResult(){
    if (computerChoice == "paper"){
        console.log("Paper wins")
    }
    else if (computerChoice = "rock") {
        console.log("Rock wins")
    }
    else {
        console.log("Scissors cut it!")
    }
} 

getResult() */