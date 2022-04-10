// exemplo 3

// Crie um algoritmo que receba três notas de um aluno, 
// calcule sua média e mostre as seguintes mensagens de acordo com cada situação: 
//- Se a media for igual ou maior que 7 - Aprovado
//- Se a media for maior e igual a cinco e menor que 7 - Recuperação
//- Se a media for menor que 5 - Reprovado

function passaOuN(a, b, c) {
    let media = ((a + b + c) / 3)
    if (media >= 7) {
        console.log(`sua média é ${media.toFixed(0)}, você foi aprovado`)
    }
    if (5 <= media > 7) {
        console.log(`sua média é ${media.toFixed(0)}, você está de recuperação`)       
        }
    if (media < 5) {
        console.log(`sua média é ${media.toFixed(0)}, você vai tentar de novo`)
    }
}
// *se errou algumas:
console.log(passaOuN(3,3,6))  // 4 


console.log("e o aluno que tirou 8, 8, 7?")
console.log(passaOuN(8, 8, 7)) // 7
