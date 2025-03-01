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

        // Update the result message
        document.getElementById("msgid").textContent = `You chose ${userChoice}. Computer chose ${compChoice}. ${winner} wins!`;

        // Update scores
        if (winner === "user") {
            userScore++;
            document.getElementById("you").textContent = userScore;
        } else if (winner === "computer") {
            compScore++;
            document.getElementById("comp").textContent = compScore;
        }
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

document.getElementById("resetBtn").addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    document.getElementById("you").textContent = userScore;
    document.getElementById("comp").textContent = compScore;
    document.getElementById("msgid").textContent = "Game reset!";
});


