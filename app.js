let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const ranIdx = Math.floor(Math.random() * 3);
    return options[ranIdx];
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.id.toLowerCase();
        const compChoice = genCompChoice();
        const winner = decideWinner(userChoice, compChoice);
        console.log(`User chose ${userChoice}, Computer chose ${compChoice}. Winner: ${winner}`);
    });
});



const decideWinner = (userChoice, compChoice) => {
    if (userChoice === compChoice) {
        return "tie";
    } else if (
        (userChoice === "rock" && compChoice === "scissors") ||
        (userChoice === "scissors" && compChoice === "paper") ||
        (userChoice === "paper" && compChoice === "rock")
    ) {
        return "user";
    } else {
        return "computer";
    }
};

