

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
                console.log("Computer Wins!: Rock crashes Scissors.");
                computerScore +=1;
                }
            // computer chooses paper: Human wins
                else if (computerChoice == "paper") {
                console.log("Human wins!: Scissors cut paper!");
                humanScore +=1;
                }
            // computer chooses scissors: tie
                else if (computerChoice== "scissors") {
                console.log("It is a tie!");
                };
            break;
            case "rock": //human chooses rock
            //Computer chooses rock: Tie
                if ( computerChoice== "rock") {
                console.log("It is a tie!");
                } 
            //computer chooses paper: Computer wins
                else if (computerChoice == "paper") {
                console.log("Computer Wins!: Paper covers rock.")
                computerScore +=1;
                }
            //Computer chooses scissors: Human wins
                else if(computerChoice =="scissors"){
                console.log("Human wins! Rock crashes scissors.");
                humanScore +=1;
                }
            break;
            //Human chooses Paper
            case "paper":
                if (computerChoice == "rock"){
                    console.log("Human wins! Paper covers rock.");
                    humanScore += 1;
                }
                else if( computerChoice == "paper") {
                    console.log("It is a tie!");
                }
                else if(computerChoice == "scissors")
                {
                    console.log("Computer wins! Scissors cut papers.")
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
            console.log("Final Verdict: Human Wins");
         }
         else if (computerScore > humanScore) {
            console.log("Final verdict: Computer takes the day!")
         }
         else {
            console.log("Final Verdict: It is a draw!")
         }
     }
  




