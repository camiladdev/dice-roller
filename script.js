document.addEventListener("DOMContentLoaded", function () {
    // Captura os elementos do HTML
    const rollButton = document.getElementById("rollButton");
    const diceType = document.getElementById("diceType");
    const diceQuantity = document.getElementById("diceQuantity");
    const resultsContainer = document.getElementById("results");
    const themeToggle = document.getElementById("themeToggle");

    // Se algum dos elementos não for encontrado, interrompe a execução
    if (!rollButton || !diceType || !diceQuantity || !resultsContainer || !themeToggle) {
        console.error("Erro: Um ou mais elementos não foram encontrados no DOM.");
        return;
    }

    let isDarkMode = false;

    // 🎲 Função para rolar os dados
    rollButton.addEventListener("click", function () {
        const sides = parseInt(diceType.value);
        const quantity = parseInt(diceQuantity.value);

        // Verifica se os valores são válidos
        if (isNaN(sides) || isNaN(quantity) || quantity < 1) {
            console.error("Erro: Tipo ou quantidade de dados inválida.");
            return;
        }

        resultsContainer.innerHTML = "";

        for (let i = 0; i < quantity; i++) {
            const resultDiv = document.createElement("div");
            resultDiv.classList.add("result", "rolling"); 
            resultsContainer.appendChild(resultDiv);

            // Aguarda 1 segundo antes de mostrar o número real
            setTimeout(() => {
                const roll = Math.floor(Math.random() * sides) + 1;
                resultDiv.textContent = roll;
                resultDiv.classList.remove("rolling");
            }, 1000);
        }
    });

    // 🌙 Alternar modo escuro/claro
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        isDarkMode = document.body.classList.contains("dark-mode");
        themeToggle.textContent = isDarkMode ? "☀️ Modo Claro" : "🌙 Modo Escuro";
    });
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/service-worker.js")
    .then(() => console.log("Service Worker registrado com sucesso!"))
    .catch(err => console.log("Erro ao registrar Service Worker:", err));
}

