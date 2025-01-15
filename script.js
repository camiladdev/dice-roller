// Seleciona os elementos do HTML

const dice = document.getElementById("dice");
const rollButton = document.getElementById("rollButton");

// Função para simular a rolagem de um dado de 20 lados

function rollDice() {
    rollButton.disabled = true;

    let counter = 0;
    const interval = setInterval(() => {
        const randomFace = Math.floor(Math.random() * 20) + 1;
        dice.textContent = randomFace;

        counter++;
        if (counter === 10) {
            clearInterval(interval);
            const finalFace = Math.floor(Math.random() * 20) + 1;
            dice.textContent = finalFace;
            rollButton.disabled = false;
        }
    }, 100);
}

rollButton.addEventListener("click", rollDice);