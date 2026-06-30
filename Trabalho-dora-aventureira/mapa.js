/* Matriz que representa a estrutura lógica de linhas e colunas do mapa */
const mapa = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
];

/* Captura de todos os elementos HTML de localização */
const locais = [
    document.querySelector(".localizacao[data-local='1']"),
    document.querySelector(".localizacao[data-local='2']"),
    document.querySelector(".localizacao[data-local='3']"),
    document.querySelector(".localizacao[data-local='4']"),
    document.querySelector(".localizacao[data-local='5']"),
    document.querySelector(".localizacao[data-local='6']"),
    document.querySelector(".localizacao[data-local='7']")
];

/* Captura de todos os elementos HTML de descrição correspondentes */
const descricoes = [
    document.querySelector(".descricao[data-local='1']"),
    document.querySelector(".descricao[data-local='2']"),
    document.querySelector(".descricao[data-local='3']"),
    document.querySelector(".descricao[data-local='4']"),
    document.querySelector(".descricao[data-local='5']"),
    document.querySelector(".descricao[data-local='6']"),
    document.querySelector(".descricao[data-local='7']")
];

/* Variável de controle para rastrear qual descrição está aberta no momento */
let descricaoAberta = null;

// Geração de posições aleatórias para as localizações nas colunas do mapa
for (let coluna = 1; coluna <= 7; coluna++) {
    // 1. Encontra todas as linhas disponíveis (que possuem valor 0) nesta coluna
    let linhasDisponiveis = [];
    for (let l = 0; l < 3; l++) {
        if (mapa[l][coluna] === 0) {
            linhasDisponiveis.push(l);
        }
    }

    // 2. Se não houver nenhuma linha livre ou se acabarem os "locais", interrompe para evitar erros
    if (linhasDisponiveis.length === 0 || locais.length === 0) {
        console.warn(`Não foi possível posicionar na coluna ${coluna}.`);
        continue; // Pula para a próxima coluna
    }

    // 3. Sorteia uma linha APENAS entre as que estão livres
    const indiceLinha = Math.floor(Math.random() * linhasDisponiveis.length);
    const linhaSorteada = linhasDisponiveis[indiceLinha];

    // 4. Sorteia e remove o local do array
    const indiceLocal = Math.floor(Math.random() * locais.length);
    
    // 5. Atribui ao mapa
    mapa[linhaSorteada][coluna] = locais[indiceLocal];
    locais.splice(indiceLocal, 1);
}

// Renderização física das localizações nos respectivos quadrantes do Grid HTML
for (let linha = 0; linha < 3; linha++) {

    for (let coluna = 1; coluna <= 7; coluna++) {

        const item = mapa[linha][coluna];

        if (!item) continue;

        const numeroQuadrante = linha * 8 + coluna + 1;

        const quadrante = document.querySelector("#q" + numeroQuadrante);

        if (quadrante) {
            quadrante.appendChild(item);
        }
    }
}

// Gerenciamento e controle do evento de clique para abrir ou fechar as descrições
document.querySelectorAll(".localizacao").forEach(item => {
    item.addEventListener("click", () => {
        const id = item.dataset.local;
        const descricao = document.querySelector(`.descricao[data-local='${id}']`);

        if (!descricao) return;

        // 1. Verifica se o item clicado JÁ estava ativo antes de limpar
        const jaAtiva = item.classList.contains("ativa");

        // 2. Limpa o estado de TODOS os elementos
        document.querySelectorAll(".localizacao").forEach(el => el.classList.remove("ativa"));
        
        // Esconde todas as descrições (onde quer que elas estejam no HTML agora)
        document.querySelectorAll(".descricao").forEach(d => {
            d.style.display = "none";
            d.classList.remove("ativa");
        });

        // 3. Se ele já estava aberto, para por aqui
        if (jaAtiva) return;

        // 4. Descobrir a posição atual do local no grid através do quadrante pai
        const quadranteAtual = item.parentElement;
        if (!quadranteAtual || !quadranteAtual.id.startsWith("q")) return;

        // Extrai o número do quadrante atual (ex: "q10" vira 10)
        const numeroQuadranteAtual = parseInt(quadranteAtual.id.replace("q", ""), 10);

        // Descobre a linha atual baseando-se no cálculo inverso que você usou no Grid:
        // Se numeroQuadrante = linha * 8 + coluna + 1, a linha pode ser descoberta assim:
        const linhaAtual = Math.floor((numeroQuadranteAtual - 1) / 8);

        let numeroQuadranteAlvo;

        // Se for a última linha (linha 2), o quadrante alvo é o de CIMA (-8 posições no grid)
        if (linhaAtual === 2) {
            numeroQuadranteAlvo = numeroQuadranteAtual - 8;
            
        } else {
            // Caso contrário (linha 0 ou 1), o quadrante alvo é o de BAIXO (+8 posições no grid)
            numeroQuadranteAlvo = numeroQuadranteAtual + 8;

        }

        // Encontra o quadrante de destino
        const quadranteAlvo = document.querySelector("#q" + numeroQuadranteAlvo);

        if (quadranteAlvo) {
            // Move a descrição para dentro do quadrante alvo e exibe
            quadranteAlvo.appendChild(descricao);
            
            item.classList.add("ativa");
            descricao.style.display = "block";
            descricao.classList.add("ativa");

            console.log(`Descrição do local ${id} movida para o quadrante ${numeroQuadranteAlvo}.`);
        }
    });
});
