// * Exemplo 2

// Elabore um algoritmo que receba dois números 
// determine qual é o maior entre eles
// se os números forem iguais, mostre uma mensagem no console "Os números são iguais".


// Utilizo uma função para verificar
function determinaMaior(a, b) {
    if (a > b) { 
        console.log(`${a} > ${b}`)
    } else if (a < b) {
        console.log(`${b} > ${a}`)
    } else if (a = b) { 
        console.log(`Os número são iguais`)
    }
}

//a sendo menor
console.log(determinaMaior(13, 18))

// números iguais
console.log(determinaMaior(5, 5))

// b sendo maior
console.log(determinaMaior(3, 58))
