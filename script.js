//Number Guesser
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
  return Math.floor(Math.random()*9);
}
function compareGuesses(user, computer, targetNumber){
  if(Math.abs(computer - targetNumber) > Math.abs(user - targetNumber) || Math.abs(computer - targetNumber) === Math.abs(user - targetNumber) ){
    return true;
  } else {
    return false;
  }

}
function updateScore(winner){
  if(winner === 'human'){
    humanScore++;
  }
  if(winner === 'computer'){
    computerScore++;
  }
}
function advanceRound(){
  return currentRoundNumber++;
}

