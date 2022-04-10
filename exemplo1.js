// * exemplo 1
// Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente

// como variável pode ser

let diaDaSemana = 3
if (diaDaSemana === 1) {
    console.log("Domingo")
} else if (diaDaSemana === 2) {
    console.log("Segunda-feira")
}  else if (diaDaSemana === 3) {
    console.log("Terça-feira")
} else if (diaDaSemana === 4) {
    console.log("Qaurta-feira")
} else if (diaDaSemana === 5) {
    console.log("Quinta-feira")
} else if (diaDaSemana === 6) {
    console.log("Sexta-feira")
} else if (diaDaSemana === 7) {
    console.log("Sábado")
}




// Em uma função ficaria

function digaDia(num) {
    if (num == 1) {
    console.log("Domingo")
} else if (num == 2) {
    console.log("Segunda-feira")
} else if (num == 3) {
    console.log("Terça-feira")
} else if (num == 4) {
    console.log("Quarta-feira")
} else if (num == 5) {
    console.log("Quinta-feira")
} else if (num == 6) {
    console.log("Sexta-feira")
} else if (num == 7) {
    console.log("Sábado")
} else {
    console.log("error")
}
  }

console.log(digaDia(5))
