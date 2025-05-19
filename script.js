//store the reference to the div displaying results
const divResults = document.querySelector('.results_div');
//divResults.classList.add("divResults");
const displayResult = document.createElement("div");
displayResult.classList.add("displayResult");
divResults.appendChild(displayResult);
displayResult.textContent = "computer wins";

//getting the computer choice
let getComputerChoice = function() {
let number = Math.random() * 10;
if (number <= 3){
    return "rock";
}
else if(number < 6){
    return "scissors";
}

else if (number >=6){
     return "paper";
}
};

//logic to get human Choice
 let getHumanChoice = function (){
   return prompt("Select one between rock, paper, and scissors").toLowerCase();
}

//player score variables
let humanScore = 0;
let computerScore = 0;
//play round logic

function playRound (humanChoice, computerChoice) {

        switch(humanChoice) {
            case "scissors":
                // computer chooses rock: computer wins
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
            break;
            case "rock": //human chooses rock
            //Computer chooses rock: Tie
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
                }
            break;
            //Human chooses Paper
            case "paper":
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
                }
            
        };
        return 0;
    }
    
    
     function playGame() {
        playRound(getHumanChoice(), getComputerChoice());
        playRound(getHumanChoice(), getComputerChoice());
        playRound(getHumanChoice(), getComputerChoice());
        playRound(getHumanChoice(), getComputerChoice());
        playRound(getHumanChoice(), getComputerChoice());
         if (humanScore > computerScore){
            displayResult.textContent ="Final Verdict: Human Wins";
         }
         else if (computerScore > humanScore) {
            displayResult.textContent ="Final verdict: Computer takes the day!";
         }
         else {
            displayResult.textContent ="Final Verdict: It is a draw!";
         }
     };
  


