// Rock-Paper-Scissors — browser version
// Runs in the browser: no readline-sync, no console-based prompts.
// The user "chooses" by clicking a button instead of typing a number.

const CHOICES = {
    Tesoura: "1", // Scissors
    Pedra: "2",   // Rock
    Papel: "3",   // Paper
};

const NAMES = {
    "1": "Tesoura",
    "2": "Pedra",
    "3": "Papel",
};

const MAX_ROUNDS = 5;

let score_u = 0;
let score_c = 0;
let rodada = 0;
let playerName = "Jogador";
let gameOver = false;

const resultEl = document.getElementById("resultado");
const placarEl = document.getElementById("placar");
const rodadaEl = document.getElementById("rodadaAtual");

function Computer_Choice() {
    const result = Math.floor(Math.random() * 3) + 1;
    return result.toString();
}

function beats(a, b) {
    // returns true if choice `a` beats choice `b`
    return (
        (a === "1" && b === "3") || // Tesoura corta Papel
        (a === "2" && b === "1") || // Pedra quebra Tesoura
        (a === "3" && b === "2")    // Papel embrulha Pedra
    );
}

function updatePlacar() {
    placarEl.textContent = `${playerName}: ${score_u}  x  Computador: ${score_c}`;
}

function updateRodada() {
    rodadaEl.textContent = gameOver
        ? "Jogo finalizado"
        : `Rodada ${rodada + 1} de ${MAX_ROUNDS}`;
}

function JogarRodada(user_Choice) {
    if (gameOver) return;

    const computer_Choice = Computer_Choice();
    rodada += 1;

    let mensagem = `Você jogou ${NAMES[user_Choice]}. Computador jogou ${NAMES[computer_Choice]}. `;

    if (user_Choice === computer_Choice) {
        mensagem += "Empate!";
    } else if (beats(user_Choice, computer_Choice)) {
        mensagem += `${playerName} ganhou essa rodada!`;
        score_u += 1;
    } else {
        mensagem += "O computador ganhou essa rodada!";
        score_c += 1;
    }

    resultEl.textContent = mensagem;
    updatePlacar();

    if (rodada >= MAX_ROUNDS) {
        gameOver = true;
        let final;
        if (score_u > score_c) {
            final = `${playerName} venceu o jogo!`;
        } else if (score_u < score_c) {
            final = "O computador venceu o jogo!";
        } else {
            final = "Empate no jogo!";
        }
        resultEl.textContent += ` — ${final}`;
    }

    updateRodada();
}

function resetGame() {
    score_u = 0;
    score_c = 0;
    rodada = 0;
    gameOver = false;
    resultEl.textContent = "Escolha Tesoura, Pedra ou Papel para começar.";
    updatePlacar();
    updateRodada();
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("Tesoura").addEventListener("click", () => JogarRodada(CHOICES.Tesoura));
    document.getElementById("Papel").addEventListener("click", () => JogarRodada(CHOICES.Papel));
    document.getElementById("Pedra").addEventListener("click", () => JogarRodada(CHOICES.Pedra));

    document.getElementById("submitBtn").addEventListener("click", () => {
        const name = document.getElementById("userInput").value.trim();
        playerName = name || "Jogador";
        resetGame();
    });

    document.getElementById("resetBtn").addEventListener("click", resetGame);

    resetGame();
});
