// exemplo 4

// Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.

function declaraPar(number) {
if (number % 2 == 0 ) {
        console.log('par')
} else { 
        console.log(`ímpar`)
}
    }
   
    //testando número par
    console.log(declaraPar(16))
    //testando número ímpar
    console.log(declaraPar(7))
