

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
console.log(number)
return choice;
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