/* Eventos abordados nesta aula :
- Eventos de tela/pagina
- Eventos de formulários
- Eventos de mouse
- Eventos de teclado */

//@@@@Eventos de tela/pagina

//Se você deseja um comportamento automático (sem a interação do usuário)
// window.onload = function(){
onload = function () {
  alert("A tela foi carregada totalmente!");
};

//Usada no body, no onload
function exibeAlert() {
  alert("A tela foi carregada totalmente!");
}

//@@@@Eventos de forulários

////@@@ onClick

////@@onChange no imput de idade
function exibeIdadesInformadas() {
  let idadeCapturada = document.getElementById("textIdade");
  console.log(idadeCapturada); //Assim, retorna o objeto nó
  console.log(idadeCapturada.value); //assim, retorna o valor do campo
}

function exibeMensagem1() {
  alert("Mensagem 1: O botão de enviar foi clicado!");
}

function exibeMensagem2() {
  alert("Mensagem 2: O botão de enviar foi clicado!");
}

let btnEnviar = document.getElementById("botaoEnviar");

//Evento de click (único) -> possível também usar o 'dblclick'
btnEnviar.addEventListener("click", (evento) => {
  ///@@@ preventDefault()

  //Evitando que a página seja atualizada
  evento.preventDefault();
  console.log("O botão 'Enviar' foi clicado");

  //Posso fazer varias ações nesta função
  exibeMensagem1();
  exibeMensagem2();
});

///@@@ Eventos do mouse, além do click

///onMouseOver
btnEnviar.onmouseover = function () {
  console.log("Cursor em cima do botão de enviar");
  btnEnviar.style.width = "50%";
  //Posso fazer qualquer ação, aqui dentro da função
};

//onMouseOut
btnEnviar.onmouseout = function () {
  console.log("Cursor saiu de cima do botão de enviar");
  btnEnviar.style.width = "10%";
  //Posso fazer qualquer ação, aqui dentro da função
};

///@@@@@ Eventos de teclado

function exibeAoPressionarUmaTecla() {
  alert("Uma tecla foi pressionada no seu teclado");
}

//keyDown (tecla pressionada)
onkeydown = function () {
  exibeAoPressionarUmaTecla();
};
//Forma simplificada
//onkeydown = exibeAoPressionarUmaTecla;

//Quando a tecla é liberada (Muito similar ao outro, mas valida na saída do click)
onkeyup = function () {
  alert("A tecla foi liberada");
};
