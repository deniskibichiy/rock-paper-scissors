

//getting the computer choice
let computerChoice = function (choice){
let number = Math.random() * 10;
if (number <= 3){
    choice = "rock";
}
else if(number < 6){
    choice = "scissors";
}

else if (number >=6){
    choice = "paper";
}
return choice;
};

//logic to get human Choice
let getHumanChoice = function(){
    let humanChoice = prompt("Select one between rock, paper, and scissors").toLowerCase();
    console.log(humanChoice);
}
