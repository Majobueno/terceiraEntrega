// emxemplo 5

// Crie uma função que recebe o ano de nascimento da pessoa 
// informe se ela é maior de idade ou menor.

function verMaiorIdade(nasci) {
//calculando a idade em uma variável
    let idade = (2022 - nasci)
// informando se > 18 <
    if (idade >= 18) {
        console.log(`você pode, bebê. tem 18+`)
    } else if (idade < 18) {
        console.log(`com ${idade} você ainda é um bebê. Nem tem idade legal`)
    }
}
//pra alguém nascido de 2014
console.log(`se nasci em 2014 já posso beber?`)
console.log(verMaiorIdade(2014)) //8
//e quem nasceu em 1987
console.log(`nasci em 1987 posso ir pra guerra?`)
console.log(verMaiorIdade(1987)) //35