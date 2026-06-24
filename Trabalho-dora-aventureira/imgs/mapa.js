const botoes =
    document.querySelectorAll(".localizacao");

const descricoes =
    document.querySelectorAll(".descricao");

botoes.forEach((botao) => {

    botao.addEventListener("click", () => {

        const alvo =
            document.getElementById(
                botao.dataset.alvo
            );

        const estaAtivo = alvo.classList.contains("ativa");

        descricoes.forEach((descricao) => {

            descricao.classList.remove("ativa");

        });

        if (!estaAtivo) {

            alvo.classList.add("ativa");

        }

    });

});