##### Entrega da Terceira Semana
###### _Lógica Aplicada_ **Resolução de Problemas/Lógica aplicada e JavaScript (sintaxe básica)**

<h2 align="center"> ✅ Aprendi Nessa Aula</h2>
<hr/> 

###### O que eu entendi?

>> Aprendizado de funções e escopo;

As funções executam uma _sequência_ quando _chamada_ (ação que "liga" a função e bota para rodar) de acordo com os **parâmetros** (informações que servem como variáveis) estabelecidos para definir a **ação** a ser executada e dar, ou não, um _retorno_ 

O escopo é em suma onde se localiza a informação; pode ser global, do documento de javascript, ou local, de uma função.

escopo léxico - nome p/ operação
ex: __"(x / y)"__

>> Aprendizado de estrutura condicional.

são as condições que determinam como executar as instruções de acordo com a entrada.

**If e Switch**

_+ If_ 
"se for..."
_+ Else_
para dar outra opção
"caso seja..."

```
let dia = 'segunda'
if (dia === 'segunda') {
    console.log('bora trabalhar')
} else if (dia === 'sabado'){
    console.log('dia de aula na Reprograma')
}

```
_+ Switch_
"troca" a variável seguindo cada
_+ case_
determinante para decisão
_+ break_
encerra o caso
_+ default_
forma padrão e também serve para tudo que esteja fora dos _case_'s

```
let tempo = 1998
switch (tempo) {
    case tempo < 2022:
        console.log('passado')
        break
    case tempo == 2022:
        console.log('presente')
        break
    case tempo > 2022:
        console.log('futuro')
        break
    default: 
        `o tempo não existe`
}

```

------------------------------------------------------------------------------------ 


## **Exercícios para Entrega**

#### 1 - Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente.

#### 2 - Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se os números forem iguais, mostre uma mensagem no console "Os números são iguais".

#### 3 - Crie um algoritmo que receba três notas de um aluno, calcule sua média e mostre as seguintes mensagens de acordo com cada situação:

  - Se a media for igual ou maior que 7 - Aprovado
  - Se a media for maior e igual a cinco e menor que 7 - Recuperação
  - Se a media for menor que 5 - Reprovado

#### 4 - Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.

#### 5 - Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.

#### 6 - crie um algoritmo que converte dias em horas, quando recebe um número de dias.

#### 7 - Crie uma função que recebe 2 parâmetros e retorna o resultado da divisão entre eles. Além disso, se o resto dessa divisão for zero deverá imprimir no console o valor e dizer que ele é par.







<p align="left">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> 
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> 
<img src="https://i.ibb.co/qRxV2fK/download.png" alt="vscode" width="40" height="40"/>
</p>