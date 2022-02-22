/* Possível solução para a prática integradora da Aula 1 */

//Declarando vetor de números inteiros
let vetorNumeros = [1, 2, 4, 8];

// variável do tipo numérica que é instancia com o valor '0'
let resultadoSoma = 0;

//Percorrendo o vetor com a estrutura de repetição 'for' (comun)
for (let index = 0; index < vetorNumeros.length; index++) {  
    //vetorNumeros.length -> Representa o tamanho do vetor (de acordo comn a quantidade de elementos presentes)
    
    //Recebendo e somando o valor recebido
    resultadoSoma += vetorNumeros[index];
    //Outra maneira de calcular
    //resultadoSoma = resultadoSoma + vetorNumeros[index];

    //Exibindo o valor presente no vetor
    console.log(resultadoSoma);
}
