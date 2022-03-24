//Visualizando as informações do Storage
console.log(window.localStorage);
console.log(localStorage);

let valor3 = "teste 3";

//Gravando 3 informações no Storage
localStorage.setItem(1, true);
localStorage.setItem(2, 56);
localStorage.setItem(3, valor3);

console.log(localStorage);

//Capturando uma informação específica presente no Storage
let itemCapturado = localStorage.getItem(2);

//Atualizando uma informação já existente pois é enviado a mesma chave/id para o Storage
localStorage.setItem(1, "marcos");

//Removendo uma informação do Storage
localStorage.removeItem(2);

//Percorrendo todos os registros do Storage
for (let item = 1; item <= localStorage.length; item++) {
  console.log(localStorage.getItem(item));
}

//Limpa todos os registros do Storage de uma vez
localStorage.clear();

//Criando um objetoJS para representa um usuário
let usuario = {
  z: "teste z",
  nome: "Cleber",
  idade: 45,
  cidade: "São Paulo",
  a: "teste a",
};

//Converte o objeto JS para JSON
let objetoUsuarioConvertidoJson = JSON.stringify(usuario);
console.log(objetoUsuarioConvertidoJson);

//Salva o objeto usuário no Storage
localStorage.setItem(1, objetoUsuarioConvertidoJson);
console.log(localStorage);

//Captura o item no storage
let objetoCapturadoJson = localStorage.getItem("1");
console.log(objetoCapturadoJson);

//Converte o objeto JSON para JS
let objetoConvertidoEmJs = JSON.parse(objetoCapturadoJson);
console.log(objetoConvertidoEmJs);
console.log(objetoConvertidoEmJs.nome);
