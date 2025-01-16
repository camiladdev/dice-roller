document.addEventListener("DOMContentLoaded", function () {
    const rollButton = document.getElementById("rollButton");
    const diceType = document.getElementById("diceType");
    const diceQuantity = document.getElementById("diceQuantity");
    const resultsContainer = document.getElementById("results");
    const themeToggle = document.getElementById("themeToggle");
    let isDarkMode = false;

    // 🎲 Função para rolar os dados
    rollButton.addEventListener("click", function () {
        const sides = parseInt(diceType.value);
        const quantity = parseInt(diceQuantity.value);
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
        isDarkMode = !isDarkMode;
        themeToggle.textContent = isDarkMode ? "☀️ Modo Claro" : "🌙 Modo Escuro";
    });
});


if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./service-worker.js")
      .then(() => console.log("Service Worker registrado com sucesso!"))
      .catch((error) => console.log("Falha ao registrar o Service Worker:", error));
  }
  
