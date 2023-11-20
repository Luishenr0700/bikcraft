// Menu ativo
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

// Ativar itens do orcemnto

const parmetros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

parmetros.forEach(ativarProduto);

// Perguntas Frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativar");
  const ativa = resposta.classList.contains("ativar");
  // console.log(ativa);
  pergunta.setAttribute("aria-expanded", ativa);
  // console.log(resposta);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

//Galeria - Bicicleta

const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(event) {
  const img = event.currentTarget;
  const mediaMin = matchMedia("(min-width: 930px)").matches;
  const mediaMax = matchMedia("(max-width: 800px)").matches;
  // console.log(mediaMin, mediaMax);
  if (mediaMin || mediaMax) {
    galeriaContainer.prepend(img);
  }
  // console.log(img);
}

function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);

// Animção
if (window.SimpleAnime) {
  new SimpleAnime();
}
