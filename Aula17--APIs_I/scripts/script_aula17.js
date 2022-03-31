let quantidadeFormulario = document.getElementById('quantidadeFormulario');
let botaoPesquisar = document.getElementById('botaoPesquisar');
let exibeResultado = document.getElementById('exibeResultado');

let raca = "beagle";

botaoPesquisar.addEventListener('click', function (evento) {

    evento.preventDefault(); //Impede de atualizar a página

    if (quantidadeFormulario.value != "") {
        //GET
       
        //fetch(`https://dog.ceo/api/breed/${raca}/images/random/${quantidadeFormulario.value}`)  //Buscando pela raça específica
        fetch(`https://dog.ceo/api/breeds/image/random/${quantidadeFormulario.value}`) //Busca de forma misturada (mix, para a API)
            .then(
                function (resultado) {
                    //Se a requisição retornou "sucesso" e teve o código como 200
                    if (resultado.status == 200) {
                        //Resolve a promisse do Body.json() com a resposta da API.
                        return resultado.json();
                    } else {
                        //Caso seja retornado um código diferente de 200 (Sucesso)
                        //Informa uma EXCEÇÃO e para a execução do código, enviando o "erro" para o bloco do .Catch()
                        throw `Erro, retornou o status ${resultado.status}`
                    }
                }
            )
            .then(resultado => {
                //Recebe a resposta da API e pode manipular as informações em um objetoJS
                console.log(resultado.message);

                //Percorrendo a lista de imagens obtida
                for (let cachorro of resultado.message) {
                    console.log(cachorro);

                    //Exibindo as imagens em tela
                    let img = document.createElement('img');
                    img.src = cachorro;
                    exibeResultado.appendChild(img);
                }
            })
            .catch(
                function (erro) {
                    console.log(erro);
                }
            )
    } else {
        alert("Você deve informar o número de imagens que deseja buscar")
    }
});

function atualizaPagina() {
    window.location.reload();
}