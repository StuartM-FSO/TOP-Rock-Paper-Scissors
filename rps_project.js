let options = ["Rock", "Paper", "Scissors"];

let result = options[getComputerChoice()];
console.log(result);

function getComputerChoice(){
    let x = Math.random() * 3;
    return Math.floor(x);
}