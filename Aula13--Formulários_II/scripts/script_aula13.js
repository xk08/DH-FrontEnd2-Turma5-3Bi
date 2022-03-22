let nomeSobrenome = document.getElementById("nome");
let idade = document.getElementById("idade");
let biografia = document.getElementById("biografia");
let altura = document.getElementById("altura");
let email = document.getElementById("email");
/* let listaItens = document.getElementById("listaItens");
  let checkbox = document.getElementById("checkbox");
  let radioGrupo = document.getElementsByName("radioGrupo");
 */
let botaoSalvar = document.getElementById("salvar");

let objetoUsuario = {
  nome: "",
  sobrenome: "",
  idade: "",
  biografia: "",
  altura: "",
  email: "",
};

botaoSalvar.addEventListener("click", function (event) {
  //Impede que a página seja atualizada
  event.preventDefault();

  objetoUsuario.nome = nomeSobrenome.value;
  objetoUsuario.idade = idade.value;
  objetoUsuario.biografia = biografia.value;
  objetoUsuario.altura = altura.value;
  objetoUsuario.email = email.value;

  carregaInformacoesEmTela(objetoUsuario);
});

function carregaInformacoesEmTela(objetoUsuarioRecebido) {
  //Captura as variáveis, para exibir as novas informações em tela
  let nomeDom = document.getElementById("nomeUsuario");
  let sobrenomeDom = document.getElementById("sobrenomeUsuario");
  let biografiaDom = document.getElementById("biografiaUsuario");
  let alturaDom = document.getElementById("alturaUsuario");
  let idadeDom = document.getElementById("idadeUsuario");
  let emailDom = document.getElementById("emailUsuario");

  nomeDom.innerText = objetoUsuarioRecebido.nome;
  sobrenomeDom.innerText = objetoUsuarioRecebido.sobrenome;
  nomeDom.innerText = objetoUsuarioRecebido.nome;
  biografiaDom.innerText = objetoUsuarioRecebido.biografia;
  alturaDom.innerText = objetoUsuarioRecebido.altura;
  idadeDom.innerText = objetoUsuarioRecebido.idade;
  emailDom.innerText = objetoUsuarioRecebido.email;
}