#  Fandora — O Fã-Clube Mais Dedicado da Dora!

Este repositório contém o código-fonte de uma página interativa de fã-clube dedicada à animação **Dora, a Aventureira**. O projeto foi estruturado com foco em semântica HTML5, estilização moderna e lúdica em CSS3, responsividade para dispositivos móveis e um toque de interatividade por meio de um Easter-Egg. 

## Integrantes
1- Rodrigo César de Moraes Tavares Filho  
2- Ryan Lucas Pereira Costa
3- Sophia de Jesus Braz
4- Thauan Vitor Rezende

## Link do Projeto

https://rodrigocesarmoraes.github.io/Rodrigo-Cesar-Ryan-Lucas-Thauan-Sophia-Dora-e-Amigos/

##  Visual e Identidade do Projeto

O site utiliza uma paleta de cores alegre e chamativa baseada no universo visual da animação original:
* **Gradiente de Fundo:** Um degradê moderno e fluido (`linear-gradient`) variando entre tons de rosa, violeta e roxo escuro.
* **Cores de Destaque:** Uso equilibrado de Roxo Escuro e o icônico Laranja da Dora (`#ffab2d`) para componentes, títulos e elementos interativos.
* **Tipografia:** Integração via Google Fonts da família **Quicksand**, trazendo uma leitura limpa, arredondada e com estética infantojuvenil amigável.

##  Funcionalidades e Estrutura Implementadas

1. **Menu de Navegação Fixo e Responsivo (`.navbar`)**:
   * Uma barra superior travada no topo (`position: fixed`) com bordas inferiores suavemente arredondadas e que acompanha o usuário durante a rolagem do site.
   * Sistema inteligente de `scroll-margin-top` para evitar que a barra flutuante cubra os títulos ao clicar nos links de âncoras internas.
   * **Responsividade Integrada (`@media`)**: Em telas menores ou smartphones, o menu se reestrutura automaticamente de forma vertical, adaptando-se perfeitamente e recalculando o espaçamento do conteúdo para evitar cortes de layout.

2. **Efeitos Visuais e Microinterações**:
   * Efeito `hover` dinâmico em todos os blocos principais da tela (`#sobre-a-dora`, `#Ensinamentos`, `#mapa_e_links` e cartões do fluxograma), fazendo com que os cards flutuem suavemente (`translateY(-5px)`) e ganhem profundidade com sombras projetadas.
   * Modificação personalizada do comportamento e cores padrão dos links (`a`) e marcações em negrito (`strong`), removendo os sublinhados azuis clássicos da web para dar lugar a uma paleta integrada ao roxo e laranja.

3. ** O Easter-Egg Interativo**:
   * Inclusão oculta de uma miniatura baseada no arquivo `mapa-da-dora.png`.
   * Possui microanimação ao passar o mouse (aumenta o tamanho e rotaciona levemente).
   * Contém disparo lógico via JavaScript (`onclick`) que exibe um alerta nativo ao navegador celebrando o feito do usuário com a mensagem: *"Parabéns aventureiro! Você encontrou o Mapa!"*.

##  Tecnologias Utilizadas
* **HTML5** — Marcação de texto semântica e acessível (`<nav>`, `<section>`, `<header>`, `<footer>`, etc.).
* **CSS3** — Grid/Flexbox para alinhamentos, efeitos de transição linear suave, estilização de gradiente e consultas de mídia (`@media screen`).
* **JavaScript** — Manipulação rápida de eventos na tela para o funcionamento do segredo interativo.
* **Google Fonts** — Família tipográfica *Quicksand*.
