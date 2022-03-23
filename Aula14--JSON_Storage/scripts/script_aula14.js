let nomeSobrenome = document.getElementById("nome");
let idade = document.getElementById("idade");
let biografia = document.getElementById("biografia");
let altura = document.getElementById("altura");
let email = document.getElementById("email");
/* let listaItens = document.getElementById("listaItens");
let checkbox = document.getElementById("checkbox");
let radioGrupo = document.getElementsByName("radioGrupo");
*/

let nomeESobrenomeValidos = false;

let botaoSalvar = document.getElementById("salvar");

botaoSalvar.setAttribute("disabled", true);

let objetoUsuario = {
  nome: "",
  sobrenome: "",
  idade: "",
  biografia: "",
  altura: "",
  email: "",
};

/* Ao carregar a página, executa automaticamente a função */
onload = () => {
  //Busca informações no Storage e as exibe em tela
  carregaInformacoesEmTela();
}

botaoSalvar.addEventListener("click", function (event) {
  //Impede que a página seja atualizada
  event.preventDefault();

  objetoUsuario.nome = nomeSobrenome.value;
  objetoUsuario.sobrenome = "";
  objetoUsuario.idade = idade.value;
  objetoUsuario.biografia = biografia.value;
  objetoUsuario.altura = altura.value;
  objetoUsuario.email = email.value;

  objetoUsuario.nome = retiraEspacosNomeUsuario(nomeSobrenome.value);

  let nomeSeparado = separaNomeUsuario(objetoUsuario.nome);
  objetoUsuario.nome = nomeSeparado[0]; //Atribui o nome
  objetoUsuario.sobrenome = nomeSeparado[1]; //Atribui o sobrenome

  if (nomeESobrenomeValidos) {

    //Envia o objeto usuário que deverá ser salvo no Storage
    armazenaObjetoUsuarioNoStorage(objetoUsuario);

    //Após salvar as informações no Storage, executa a função que exibe os dados em tela (para atualizar a pagina)
    carregaInformacoesEmTela();
  }
});

function retiraEspacosNomeUsuario(nomeUsuario) {
  return nomeUsuario.trim();
}

function separaNomeUsuario(nomeCompletoUsario) {
  return nomeCompletoUsario.split(" ");
}

/* Coloca o evento de blur no input de texto */
nomeSobrenome.addEventListener("blur", function () {
  let nomeValidacao = document.getElementById("nomeValidacao");

  if (nomeSobrenome.value != "" && nomeSobrenome.value != null) {
    nomeESobrenomeValidos = true;
    nomeValidacao.innerText = "";

    botaoSalvar.removeAttribute("disabled");
  } else {
    nomeESobrenomeValidos = false;
    nomeValidacao.style.color = "#E03C3C";
    nomeValidacao.innerText = "O nome é obrigatorio";

    botaoSalvar.setAttribute("disabled", true);
  }

  if (nomeSobrenome.value.length >= 7) {
    nomeESobrenomeValidos = true;
    botaoSalvar.removeAttribute("disabled");
  } else {
    nomeESobrenomeValidos = false;
    botaoSalvar.setAttribute("disabled", true);
  }
});

//@@@4 - Validando o email
email.addEventListener("blur", function () {
  let emailValidacao = document.getElementById("emailValidacao");

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    /* Se for true */
    emailValidacao.innerText = "";
    nomeESobrenomeValidos = true;
    botaoSalvar.removeAttribute("disabled");
  } else {
    /* Se for false */
    emailValidacao.style.color = "#E03C3C";
    emailValidacao.innerText = "E-mail inválido";
    nomeESobrenomeValidos = false;
    botaoSalvar.setAttribute("disabled", true);
  }
});

function carregaInformacoesEmTela() {
  
  //Captura o retorno com os dados obtidos pelo storage
  let objetoUsuarioNoStorage = buscaObjetoUsuarioNoStorage();

  /* Se o objeto usuário existe no Storage, realiza a renderização das informações em tela */
  if (objetoUsuarioNoStorage != null) {

    console.log(localStorage);
    console.log(sessionStorage);

    //Captura as variáveis, para exibir as novas informações em tela
    let nomeDom = document.getElementById("nomeUsuario");
    let sobrenomeDom = document.getElementById("sobrenomeUsuario");
    let biografiaDom = document.getElementById("biografiaUsuario");
    let alturaDom = document.getElementById("alturaUsuario");
    let idadeDom = document.getElementById("idadeUsuario");
    let emailDom = document.getElementById("emailUsuario");

    nomeDom.innerText = objetoUsuarioNoStorage.nome;
    sobrenomeDom.innerText = objetoUsuarioNoStorage.sobrenome;
    biografiaDom.innerText = objetoUsuarioNoStorage.biografia;
    alturaDom.innerText = objetoUsuarioNoStorage.altura;
    idadeDom.innerText = objetoUsuarioNoStorage.idade;
    emailDom.innerText = objetoUsuarioNoStorage.email;
  }

  /* Função é chamada após a exibição dos dados, para limpar os campos do forms e bloquear o botão de salvar */
  limpaFormularioEBloqueiaBotao();
}

function limpaFormularioEBloqueiaBotao() {
  nomeSobrenome.value = "";
  idade.value = "";
  biografia.value = "";
  altura.value = "";
  email.value = "";
  botaoSalvar.setAttribute("disabled", true);
}
