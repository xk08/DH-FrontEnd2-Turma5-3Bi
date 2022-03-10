//////@@@@@@ Trabalhando com elementos dinâmicos

//@@@Chamado no Script da Aula 6
function atributosDinamicos() {

    //Capturando a lista de imagens da página
    let listaImagensFelinos = document.querySelectorAll('img');
    console.log(listaImagensFelinos);

    //Percorrendo os elementos do tipo 'img'
    for (let img of listaImagensFelinos) {

        console.log(img);

        //@@hasAttribute -> Verifica se o atributo existe
        console.log(img.hasAttribute("src")); // true
        console.log(img.hasAttribute("teste")); // false

        //@@getAttribute -> Captura o atributo
        //let atributoPego = img.getAttribute("teste"); //Retorna 'null'
        let atributoPego = img.getAttribute("src");
        console.log(atributoPego);

        //outra forma de capturar e alterar diretamente
        console.log(img.src);

        //@@setAttributte -> Define um atributo (Local ou da internet)
        img.setAttribute("src", "./imagens/leopardo.jpg");
        img.setAttribute("src", "https://s2.glbimg.com/xYzPF9deXowzD_lQBdcpecfnk64=/e.glbimg.com/og/ed/f/original/2021/01/30/jadeeyedleopard-02.jpg");

        //Criando um novo atributo
        img.setAttribute("novoAtributo", "Novo valor")

        console.log(atributoPego);

        //@@removeAttribute -> Remove um atrivuto especifico
        img.removeAttribute("src");
    }

    //Quero adicionar um Link de mais informações ao Card do leão (APENAS)

    // 1) Capturo o card do leão
    console.log(listaImagensFelinos); //exibe todos os elementos do tipo 'img'
    console.log(listaImagensFelinos[1]); //Exibe uma 'img' específica
    console.log(listaImagensFelinos[1].parentElement); // Exibe a div (pai) da img selecionada

    //Criando um novo card
    let cardLeao = listaImagensFelinos[1].parentElement;

    // 2) Criar o novo elemento do tipo 'a' -> Link
    let a = document.createElement('a')
    a.innerText = "Clique para conhecer mais sobre os leões"

    a.setAttribute('href', "https://www.google.com");
    a.setAttribute('href', "https://www.ikoporan.org/pt-br/voluntariado/conservacao-de-leoes/");

    //Abrir o link em outra página (Usando mais um atributo)
    a.setAttribute('target', "_blank");

    console.log(a);

    cardLeao.appendChild(a)
}


/* 
    Passo a passo para resolver o desafio:
    1- Criar uma opção para a seleção do felino (promp)
    2 - Verificar, qual foi o felino escolhido
    3 - Usuário informa uma url/img da internet (prompt)
    4 - Acessar o atributo 'src' e alterar para a img da internet
*/

