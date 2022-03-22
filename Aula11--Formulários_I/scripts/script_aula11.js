/* Turma 5 */

/* 1- Capturar as informações e obter os valores */
let nomeUsuario = document.getElementById("nome");
let idade = document.getElementById("idade");
let altura = document.getElementById("altura");
let biografia = document.getElementById("biografia");

let botaoSalvar = document.getElementById("salvar");

let listaItens = document.getElementById("listaItens");

let checkbox = document.getElementById("checkbox");

//Pega um array de elemento de acordo com seu atributo 'name'
let radioGrupo = document.getElementsByName("radioGrupo");

/* Ao clicar no botão, executa as ações abaixo */
botaoSalvar.addEventListener("click", function (evento) {
  //Evita que a página seja atualizada e que o evento de submit seja disparado
  evento.preventDefault();

  console.log(nomeUsuario.value);
  console.log(idade.value);
  console.log(altura.value);
  console.log(biografia.value);

  //exibindo as informações do select
  console.log(listaItens.value);

  //Exibindo as informações do checkbox
  console.log(checkbox.value);
  console.log(checkbox.checked);

  //Exibindo as informações do radio-button
  console.log(radioGrupo);

  let radioCapturado;

  radioGrupo.forEach(function (radioSelecionado) {
    if (radioSelecionado.checked) {
      //captura qual foi o elemento selecionado no Radio-button
      radioCapturado = radioSelecionado;
    }
    console.log(radioSelecionado.checked);
  });

  console.log("O elemento selecionado foi: " + radioCapturado.value);

  /* Incova função que exibe os dados em tela */
  exibeDadosEmTela(nomeUsuario.value);
});

/* Função chamada para exibir as informações em tela*/
function exibeDadosEmTela(nome) {
  let nomeCadastro = document.getElementById("nomeUsuario");
  nomeCadastro.innerText = nome;
}
