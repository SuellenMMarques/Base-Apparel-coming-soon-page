const botao = document.querySelector(".form-conteiner");
const input = document.querySelector(".input-email");
const erro = document.querySelector(".mensagem-erro");


botao.addEventListener("submit", (event) => {
    event.preventDefault();

    const valor = input.value.trim();

    if (valor === "" || !validarEmail(valor)) {
        erro.style.display = "block";
        input.classList.add("erro");
    } else {
        erro.style.display = "none";
        input.classList.remove("erro");
    }
});

function validarEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}