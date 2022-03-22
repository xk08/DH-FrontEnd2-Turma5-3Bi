let idSomar = document.getElementById("idSomar");
let idSubtrair = document.getElementById("idSubtrair");
let idMultiplicar = document.getElementById("idMultiplicar");
let idDividir = document.getElementById("idDividir");

let idBotaoLimpar = document.getElementById("idBotaoLimpar");

//Usado também pelo calculadora.js
let idParagrafo = document.getElementById("idParagrafo");

//Executa ao carregar a página (Automaticamente)
(function () {
  verificaBotoes();

  //Limpa o resultado exibido no paragrafo em tela
  idBotaoLimpar.addEventListener("click", (e) => {
    e.preventDefault();
    idParagrafo.innerText = 0;
  });
})();

function verificaBotoes() {
  //1- Somar
  idSomar.addEventListener("click", (e) => {
    e.preventDefault();
    /* Variável definida em "calculadora.js" */
    operacaoEscolhida = 1;

    //Invocando a função de escolha, e passando a função de coleta dos números por callback + operaçãoRealizada
    escolhaUsario(coletaNumeros, operacaoEscolhida, "Soma");
  });

  //1- Subtrair
  idSubtrair.addEventListener("click", (e) => {
    e.preventDefault();
    operacaoEscolhida = 2;

    //Invocando a função de escolha e passando a função de escolha dos números por callback + operaçãoRealizada
    escolhaUsario(coletaNumeros, operacaoEscolhida, "Subtração");
  });

  //3- Multiplicar
  idMultiplicar.addEventListener("click", (e) => {
    e.preventDefault();
    operacaoEscolhida = 3;

    //Invocando a função de escolha e passando a função de escolha dos números por callback + operaçãoRealizada
    escolhaUsario(coletaNumeros, operacaoEscolhida, "Multiplicação");
  });

  //4- Dividir
  idDividir.addEventListener("click", (e) => {
    e.preventDefault();
    operacaoEscolhida = 4;

    //Invocando a função de escolha e passando a função de escolha dos números por callback + operaçãoRealizada
    escolhaUsario(coletaNumeros, operacaoEscolhida, "Divisão");
  });
}

//Função que exibe o resultado
//Função declarativa
function exibeResultado(resultadoRecebido) {
  idParagrafo.innerText = resultadoRecebido;
}
