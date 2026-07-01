const botoes =
    document.querySelectorAll(".localizacao");
    
function abrirDescricao(B) {

    const ativo = B.classList.contains("ativa");

    botoes.forEach((d) => {

        d.classList.remove("ativa");

    });

    if (!ativo) {
        B.classList.add("ativa");
    }
}

botoes.forEach((botao) => {

    botao.addEventListener("click", () => {

        abrirDescricao(botao);

    });

});
