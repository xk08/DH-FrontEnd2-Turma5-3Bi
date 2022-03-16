let nomeUsuario = "Pablo"

// Função declarativa
function exibeNomeUsuario (nome) {
    //Bloco de execução da função
    return console.log(nome);
}
exibeNomeUsuario("Pedro");


// Função expressa, ou expressada
let somar = function funcaoSoma(valorA, valorB) {
    return console.log(valorA+valorB);
}
somar(5,5);




//Função auto-invocavel
(function() {
    //Bloco de código que será executado
})()




//@@Funções de CallBack

// Queremos somar 2 números e exibir o resultado...

function executaCalculo (funcaoRecebidaPorParametro) {
    
    let valor1 = 4;
    let valor2 = 6;

    let resultadoSoma = valor1+valor2;

    //Executa a função que foi recebida por parametro
    funcaoRecebidaPorParametro(resultadoSoma);
}

function exibeResultadoSoma(resultadoObtido) {
    console.log(resultadoObtido);

}
/* 
    Invoca a função que processa/executa o calculo, 
    e envia a função que exibe o resultado por parametro.
 */
executaCalculo(exibeResultadoSoma);




//@@@Arrow Functions

//## Os 3 códigos abaixo, fazem exatamente a mesma coisa...

// Modo convencional de utilização (Sem arrow function)
let soma = function(valorA, valorB) {
    //Bloco de código 1
    
    //Bloco de código 2

    //Bloco de código 3
    return console.log(valorA+valorB);
}
soma(5,5); //Invocando a função

//Utilizando ArrowFunction
let somaArrowfunction = (valorA, valorB) => {
    //Bloco de código 1

    //Bloco de código 2

    //Bloco de código 3

    return console.log(valorA+valorB);
};
somaArrowfunction(5,5)

//Versão simplificada
let somaArrowfunction2 = (valorA, valorB) =>  console.log(valorA+valorB);

somaArrowfunction2(4,12);