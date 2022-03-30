let validacao = true;

//Criando um objeto para representar o usuário
let objetoUsuario = {
    nome: "Usuario",
    endereco: {
        cidade: {
            nome: "São Paulo",
            cep: "97660545"
        }
    }
}

let objetoUsuarioJson = JSON.stringify(objetoUsuario);

//Criando e simulando a utilização de uma promisse
let minhaPromisse = new Promise(function (resolve, reject) {

    //Função que pausa a execução de um bloco de código, no tempo definido.
    setTimeout(() => {
        if (validacao) {
            resolve(objetoUsuarioJson);
        } else {
            reject("Usuário não encontrado");
        }
    }, 5000); //Definição do tempo

});

//Executando a promisse, e tentando resolve-la
minhaPromisse
    .then(
        //Promisse resolvida
        function (resultadoResolvido) {
            console.log("Primeiro Then");
            console.log(resultadoResolvido);

            let objetoEmJs = JSON.parse(resultadoResolvido);
            return objetoEmJs.endereco;
        }
    )
    .then(function (resultado2Then) {
        console.log("Segundo Then");
        console.log(resultado2Then);

        throw "Falhou" //Lança um erro que impede a execução do código
        return resultado2Then.cidade
    })

    .then(function (resultado3Then) {
        console.log("Terceiro Then");
        console.log(resultado3Then);
    })

    //este bloco é chamado, caso acontece algum erro durante a chamada da promisse (e ela seja rejeitada)
    .catch(
        //promisse rejeitada
        function (resultadoRejeitado) {
            console.log(resultadoRejeitado);
        }
    );