let options = ["Rock", "Paper", "Scissors"];
let losesTo = [2, 0, 1];
let humanScore = 0;
let computerScore = 0;

let h = getHumanChoice();
let c = getComputerChoice();

let result = playRound(c, h);
let message = "";
switch(result){
    case "win": message = `You ${result}: ${options[h]} beats ${options[c]}`;
        humanScore++;
        break;
    case "lose": message = `You ${result}: ${options[c]} beats ${options[h]}`;
        computerScore++;
        break;
    case "draw": message = `It's a ${result}: both chose ${options[c]}`;
        break;
    default: break;
}
console.log(message);
console.log(`Human: ${humanScore} vs Computer: ${computerScore}`);

function getComputerChoice(){
    let x = Math.random() * 3;
    return Math.floor(x);
}

function getHumanChoice(){
    let choiceNumber = 3;
    while(choiceNumber > 2){
        choice = prompt("Rock, Paper, Scissors");
        switch(choice.toLowerCase()){
            case "rock": choiceNumber = 0;
                break;
            case "paper": choiceNumber = 1;
                break;
            case "scissors": choiceNumber = 2;
                break;
            default: choiceNumber = 3;
                break;
        }
    }
    return choiceNumber;
}

function playRound(computerChoice, humanChoice){
    let outcome = "";

    switch(humanChoice){
        case losesTo[computerChoice]: outcome = "lose";
            break;
        case computerChoice: outcome = "draw";
            break;
        default: outcome = "win";
            break;
    }
    return outcome;
}