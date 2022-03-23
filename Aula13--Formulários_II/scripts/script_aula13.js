/* Capturando as informações do formulário */
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

/* Criando um objeto para representar o usuário e instaciando com valores "" */
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

  objetoUsuario.nome = retiraEspacosNomeUsuario(nomeSobrenome.value);

  let nomeCompletoUsuario = separaNomeUsuario(objetoUsuario.nome);
  console.log(nomeCompletoUsuario);

  objetoUsuario.nome = nomeCompletoUsuario[0];
  objetoUsuario.sobrenome = nomeCompletoUsuario[1];

  if (validacaoEstaOk) {
    carregaInformacoesEmTela(objetoUsuario);
  }
});

let validacaoEstaOk = false;

nomeSobrenome.addEventListener("blur", function () {
  let nomeValidacao = document.getElementById("nomeValidacao");

  if (nomeSobrenome.value != "") {
    console.log("Está preenchido");

    nomeValidacao.innerText = "";
    nomeSobrenome.style.backgroundColor = "#ffff";
    botaoSalvar.removeAttribute("disabled");
    validacaoEstaOk = true;

  } else {
    console.log(" Não Está preenchido");
    nomeValidacao.style.color = "#E92323";
    nomeValidacao.innerText = "Campo é obrigatório";
    nomeSobrenome.style.backgroundColor = "#DB7979BE";
    botaoSalvar.setAttribute("disabled", true);
    validacaoEstaOk = false;

  }
});

email.addEventListener("blur", function () {

  let emailValidacao = document.getElementById('emailValidacao');

    /* Utilizando expressão regulares (RegExp)*/
    if ( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
      emailValidacao.style.color = "#E92323";
      botaoSalvar.removeAttribute("disabled");
      emailValidacao.innerText = "";
      validacaoEstaOk = true;
    } else {
    emailValidacao.style.color = "#E92323";
    emailValidacao.innerText = "O e-mail informado é inválido";
    nomeSobrenome.style.backgroundColor = "#DB7979BE";
    botaoSalvar.setAttribute("disabled", true);
    validacaoEstaOk = false;
    }
    
});

function retiraEspacosNomeUsuario(nomeUsuarioRecebido) {
  return nomeUsuarioRecebido.trim();
}

function separaNomeUsuario(nomeUsuarioRecebido) {
  return nomeUsuarioRecebido.split(" ");
}

function carregaInformacoesEmTela(objetoUsuarioRecebido) {
  //Captura as variáveis, para exibir as novas informações em tela
  let nomeDom = document.getElementById("nomeUsuario");
  let sobrenomeDom = document.getElementById("sobrenomeUsuario");
  let biografiaDom = document.getElementById("biografiaUsuario");
  let alturaDom = document.getElementById("alturaUsuario");
  let idadeDom = document.getElementById("idadeUsuario");
  let emailDom = document.getElementById("emailUsuario");

  console.log(objetoUsuarioRecebido.nome);

  nomeDom.innerText = objetoUsuarioRecebido.nome;
  sobrenomeDom.innerText = objetoUsuarioRecebido.sobrenome;
  nomeDom.innerText = objetoUsuarioRecebido.nome;
  biografiaDom.innerText = objetoUsuarioRecebido.biografia;
  alturaDom.innerText = objetoUsuarioRecebido.altura;
  idadeDom.innerText = objetoUsuarioRecebido.idade;
  emailDom.innerText = objetoUsuarioRecebido.email;
}
