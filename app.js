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
        console.log(userChoice, compChoice);
    });
});
