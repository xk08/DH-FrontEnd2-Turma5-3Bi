///@@@ Formas de capturar e exibir informações do usuário

//ALERT
let nomeUsuario = "Marcos";
alert("Usuário " + nomeUsuario + " logado com sucesso.");

//CONFIRM
//Recebe o valor boleano e atribui a uma variável
let valorRecebidoConfirm = confirm("Você deseja finalizar a sessão ?");

console.log(valorRecebidoConfirm);

//Verificando a variável boleana
if (valorRecebidoConfirm) { //True/Verdadeiro
    //Clicou no OK
    alert("Você finalizou a sessão");
} else { //False/Falso
    //Clicou em Cancel
    alert("Você  não finalizou a sessão");
}

//PROMPT

//Variável do tipo numerica/inteira
let numero1 = 10;

//Recbe um valor textual vindo do prompt
let valorRetornoPrompt = prompt("Informe um número inteiro");

///@@@ Formas de converter as informações recebidas + Função Math

//Converte valor textual para valor numérico (valores flutuantes/decimais)
let valorConvertido = parseFloat(valorRetornoPrompt);

//Executa a soma dos valores e armazena em uma variável
let soma = numero1 + valorConvertido;

alert(soma);

//MATH

//Recebe um número aleatorio entre 1 e 3
let numeroAleatorio = Math.random() * 3 + 1;

console.log(numeroAleatorio);