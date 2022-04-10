// exemplo 7

// Crie uma função que recebe 2 parâmetros 
// retorna o resultado da divisão entre eles
// Além disso, se o resto dessa divisão for zero deverá imprimir no console o valor 
// *nao tenho ctz a ql valor e refere*
// e dizer que ele é par.

function dividirDois(x, y) {
// primeiro eu quero fazer dizer os números
    console.log(`se dividirmos ${x} por ${y}`)
// crio a operação ou escopo léxico
    let divisao = (x / y);
    console.log(`obeteremos ${divisao.toFixed(2)}`)
    if (x % y == 0) {
        console.log(`${x} dividido por ${y} dá ${divisao} e é par`)
    }
}
// tambem tinha funcinado declarando outra varialvel pro resto, assim:
// let resto = (x % y)
// if (resto == 0) { console.log...

console.log(dividirDois(154, 6))
console.log(dividirDois(16, 4))
console.log(dividirDois(50000, 5))