/* NESTA AULA, FAREMOS APENAS A CAPTURA DAS INFORMAÇÕES, 
SEM MODIFICAR OU ADICIONAR E REMOVER ELEMENTOS 
-> As proximas aulas, faremos a alteração de alguns elementos e suas propriedades*/

//Vendo a estrutura completa da página
console.log(document)

//Informações do body
console.log(document.body)

//BODY -> Pegando a coleção de LI do UL + Adentrando
console.log(document.body.children[1].children[1].children)


let elementoH1 = document.querySelector('h1');
console.log(elementoH1);
console.log(elementoH1.childNodes[0].data);

//Exemplo de erro ao buscar
let elemento2 = document.querySelector('contenido'); //Erro pq precisa do ponto na busca da classe
console.log(elemento2);

let elemento3 = document.querySelector('.contenido');
console.log(elemento3);

//ARTICLES -> Lista de elementos

let listaDeItens = document.querySelectorAll('article');
console.log(listaDeItens);

let articleEspecifico = document.getElementById('card1');
console.log(articleEspecifico);

//Outra forma de pegar pelo ID
let articleEspecificoPorId = document.querySelector('#card1');
console.log(articleEspecifico);

//Lista pega -> Percorrendo ela
//Percorrendo a lista de itens
for (let item of listaDeItens) {
    console.log(item);
    console.log(item.children[0].childNodes[0].data);
    console.log(item.children[1].childNodes[0].data);
    console.log("\n");
}

