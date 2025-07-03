// PARTE 1: Lista de perguntas e respostas
perguntas = [
  {
    pergunta: "Quais são as notas naturais da escala musical?",
    respostas: [
      { opcao: "Dó, Ré, Mi, Fá, Sol, Lá, Si", correto: true },
      { opcao: "Dó, Ré, Fá, Sol, Lá, Si, Dó", correto: false },
      { opcao: "Dó, Ré, Mi, Fá#, Sol, Lá, Si", correto: false }
    ]
  },
  {
    pergunta: "O que representa a cifra 'Am'?",
    respostas: [
      { opcao: "Lá menor", correto: true },
      { opcao: "Lá maior", correto: false },
      { opcao: "Lá com sétima", correto: false }
    ]
  },
  {
    pergunta: "Qual tríade forma o acorde de Dó maior (C)?",
    respostas: [
      { opcao: "Dó, Mi, Sol", correto: true },
      { opcao: "Dó, Ré, Fá", correto: false },
      { opcao: "Dó, Fá, Lá", correto: false }
    ]
  },
  {
    pergunta: "O que é uma tônica em um acorde?",
    respostas: [
      { opcao: "É a nota mais aguda do acorde", correto: false },
      { opcao: "É a nota que dá nome ao acorde", correto: true },
      { opcao: "É a nota mais grave da escala", correto: false }
    ]
  },
  {
    pergunta: "Qual a cifra correspondente ao acorde de Mi maior?",
    respostas: [
      { opcao: "E", correto: true },
      { opcao: "Em", correto: false },
      { opcao: "M", correto: false }
    ]
  }
];

// PARTE 2: Pegando os elementos do HTML
const perguntaElemento = document.querySelector(".pergunta");
const respostasElemento = document.querySelector(".respostas");
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim span");
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");

// PARTE 3: Variáveis para controle do jogo
let indiceAtual = 0; // Índice da pergunta atual
let acertos = 0; // Contador de acertos

// PARTE 4: Função para carregar uma nova pergunta
function carregarPergunta() {
  progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`; // Atualiza o progresso
  const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
  perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta

  respostasElemento.innerHTML = ""; // Limpa as respostas anteriores

  // Percorre todas as respostas da pergunta atual
  for (let i = 0; i < perguntaAtual.respostas.length; i++) {
    // Pega a resposta atual com base no índice 'i'
    const resposta = perguntaAtual.respostas[i];
    // Cria um novo elemento 'button' (botão)
    const botao = document.createElement("button");
    // Adiciona a classe CSS 'botao-resposta' ao botão para estilizar
    botao.classList.add("botao-resposta");
    // Define o texto do botão com a opção de resposta (resposta.opcao)
    botao.innerText = resposta.opcao;
    // Adiciona um evento de clique no botão
    botao.onclick = function () {
      // Se a resposta for correta (resposta.correto === true), incrementa o número de acertos
      if (resposta.correto) {
        acertos++; // ou acertos = acertos + 1;
      }
      // Avança para a próxima pergunta
      indiceAtual++;

      // Se ainda houver perguntas, carrega a próxima pergunta
      if (indiceAtual < perguntas.length) {
        carregarPergunta(); // Carrega a próxima pergunta
      } else {
        // Se não houver mais perguntas, finaliza o jogo
        finalizarJogo();
      }
    };

    // Adiciona o botão de resposta à tela, dentro do elemento 'respostasElemento'
    respostasElemento.appendChild(botao);
  }
}

// PARTE 5: Função para mostrar a tela final
function finalizarJogo() {
  textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`; // Exibe o resultado
  conteudo.style.display = "none"; // Esconde as perguntas
  conteudoFinal.style.display = "flex"; // Mostra a tela final
}

// PARTE 6: Iniciando o jogo pela primeira vez
carregarPergunta();
