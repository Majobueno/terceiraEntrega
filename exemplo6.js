// exemplo 6

// * crie um algoritmo que converte dias em horas, quando recebe um número de dias

// como variavel
const ndias = 8
let diasEmH = (ndias * 24)
console.log(diasEmH)

// em função
function converteEmHora(dias) { 
    return (dias * 24)
}

// sete dias
console.log(converteEmHora(7)) //10080
// ou ainda
console.log(`20 dias tem ${converteEmHora(20)} horas`) // 28800