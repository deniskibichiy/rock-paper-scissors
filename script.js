//store the reference to the div displaying results
const divResults = document.querySelector('.results_div');


//divResults.classList.add("divResults");
const displayResult = document.createElement("div");

displayResult.classList.add("displayResult");
divResults.appendChild(displayResult);
displayResult.textContent = "computer wins";

const rockSelection = document.querySelector("#rock");
const paperSelection = document.querySelector("#paper");
const scissorsSelection = document.querySelector("#scissors");

const para = document.createElement("p");



//getting the computer choice
let computerChoice;

let getComputerChoice = function() {

let number = Math.random() * 10;

if (number <= 3){
    computerChoice = "rock";
}
else if(number < 6){
    computerChoice = "scissors";
}

else if (number >=6){
     computerChoice = "paper";
}
return computerChoice;
};
//player score variables
let humanScore = 0;
let computerScore = 0;
let humanChoice;
//logic to get human Choice
 rockSelection.addEventListener('click' , () => {
    getComputerChoice();
    humanChoice == "rock";
    console.log("Rock was selected");
     if ( computerChoice== "rock") {
                displayResult.textContent = "It is a tie!";
                } 
            //computer chooses paper: Computer wins
                else if (computerChoice == "paper") {
                displayResult.textContent ="Computer Wins!: Paper covers rock."
                computerScore +=1;
                }
            //Computer chooses scissors: Human wins
                else if(computerChoice =="scissors"){
                displayResult.textContent = "Human wins! Rock crashes scissors.";
                humanScore +=1;
                };
    checkFinalResult();
    
 });

 paperSelection.addEventListener('click' , ()=> {
    getComputerChoice();
    humanChoice == "paper";
     if (computerChoice == "rock"){
                    displayResult.textContent = "Human wins! Paper covers rock.";
                    humanScore += 1;
                }
                else if( computerChoice == "paper") {
                    displayResult.textContent = "It is a tie!";
                }
                else if(computerChoice == "scissors")
                {
                    displayResult.textContent = "Computer wins! Scissors cut papers."
                    computerScore =+1;
                };
    checkFinalResult();
 });

 scissorsSelection.addEventListener('click' , () => {
    getComputerChoice();
    humanChoice == "scissors";
    if (computerChoice== "rock"){
                displayResult.textContent = "Computer Wins!: Rock crashes Scissors.";
                computerScore +=1;
                }
            // computer chooses paper: Human wins
                else if (computerChoice == "paper") {
                displayResult.textContent = "Human wins!: Scissors cut paper!";
                humanScore +=1;
                }
            // computer chooses scissors: tie
                else if (computerChoice== "scissors") {
                displayResult.textContent = "It is a tie!";
                };
    checkFinalResult();
 });


 // to display the final result:
 function checkFinalResult() {
    if (humanScore > computerScore){
        para.textContent ="Final Verdict: Human Wins";
        }
    else if (computerScore > humanScore) {
        para.textContent ="Final verdict: Computer takes the day!";
         }
    else {
        para.textContent ="Final Verdict: It is a draw!";
         };
divResults.appendChild(para);
        }

