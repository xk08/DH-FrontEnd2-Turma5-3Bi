//Definindo variáveis globais ao escopo
let resultado = 0;
let num1Coletado = 0;
let num2Coletado = 0;
let calculoValido = false;

//Variável global ao escopo (usada pelo dom.js)
let operacaoEscolhida = 0;

//função que recebe: outra função por callback + valor para o teste do Switch
//Função declarativa
function escolhaUsario(callback, escolha, operacaoRealizada) {
  switch (escolha) {
    case 1:
      //invoca função que coleta os números, recebida por parametro e executada como CallBack
      callback(operacaoRealizada);
      //Verifica se ambos os números foram informados pelo usuário
      if (calculoValido) {
        /* Invoca a função somar, passando os valores coletados na função "coletaNumeros" */
        resultado = somar(num1Coletado, num2Coletado);
        //Invocando a função que exibe o resultado e altera o valor em tela (presente em dom.js)
        exibeResultado(resultado);
      }
      break;

    case 2:
      callback(operacaoRealizada);
      if (calculoValido) {
        resultado = subtrair(num1Coletado, num2Coletado);
        //Invocando a função
        exibeResultado(resultado);
      }
      break;

    case 3:
      callback(operacaoRealizada);
      if (calculoValido) {
        resultado = multiplicar(num1Coletado, num2Coletado);
        exibeResultado(resultado);
      }
      break;
    case 4:
      callback(operacaoRealizada);
      if (calculoValido) {
        resultado = dividir(num1Coletado, num2Coletado);
        exibeResultado(resultado);
      }
      break;

    default:
      alert(`A opção informada "${escolha}" não está disponível`);
      break;
  }
}

//Funçao expressada
let coletaNumeros = function coletaNumerosUsuario(operacaoRecebida) {
  //Modifica as variáveis de escopo globais
  num1Coletado = prompt(`${operacaoRecebida}: Informe o primeiro número:`);
  num2Coletado = prompt(`${operacaoRecebida}: Informe o primeiro número:`);

  /* Verifica se ambos os números foram informados no prompt pelo usuário */
  if (num1Coletado == "" || num2Coletado == "") {
    alert("Ambos os números devem ser informados");
    calculoValido = false;
  } else {
    calculoValido = true;
  }
};
