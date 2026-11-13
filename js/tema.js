
const raiz = document.documentElement;
const botaoTema = document.querySelector(".tema-toggle");

// Recupera o tema escolhido anteriormente
const temaSalvo = localStorage.getItem("tema-portfolio");

// Aplica o tema salvo ou começa no modo escuro
raiz.dataset.tema = temaSalvo || "escuro";

function atualizarBotao() {
    const temaAtual = raiz.dataset.tema;

    if (temaAtual === "claro") {
        botaoTema.textContent = "🌙 Modo escuro";
        botaoTema.setAttribute("aria-pressed", "true");
    } else {
        botaoTema.textContent = "☀️ Modo claro";
        botaoTema.setAttribute("aria-pressed", "false");
    }
}

// Alterna entre claro e escuro
botaoTema.addEventListener("click", () => {
    const temaAtual = raiz.dataset.tema;

    const novoTema = temaAtual === "claro"
        ? "escuro"
        : "claro";

    raiz.dataset.tema = novoTema;

    // Salva a escolha para a próxima visita
    localStorage.setItem("tema-portfolio", novoTema);

    atualizarBotao();
});

atualizarBotao();
