#### Entrega da Terceira Semana
##### _Lógica Aplicada_ **Resolução de Problemas em JavaScript (sintaxe básica)**

<h2 align="center" ><font color="green"> ✅</font> <font face="colibri" color="#4B0082"> Aprendi Nessa Aula </font> </h2>
<hr/> 

###### O que eu entendi?

>> Funções e Escopo;

As **Funções** executam uma _sequência_ quando _chamada_ (ação que "liga" a função e bota para rodar) <br>
de acordo com os **parâmetros** (informações que servem como variáveis) estabelecidos para <br>
**cadeia de comandos** a ser executada e dar, ou não, um _retorno_

**Escopo** é, em suma, onde se localiza a informação; <br>
+<br>
++ pode ser global <br>
do documento de javascript <br>
+<br>
++ local <br>
dentro de uma função <br>

<img src="https://blog.cod3r.com.br/wp-content/uploads/2022/01/2022-01-04_11-28.png" alt="escopo" height="360"/>

++ escopo léxico <br>
nome para operação executada a partir da chamada <br>
ex: "<i>(x / y)</i>" <br>
  
  

>> Estrutura Condicional.

<p align=center>
<img src="https://dkrn4sk0rn31v.cloudfront.net/uploads/2021/02/ESTRUTURAS-CONDICIONAIS-REPETICAO-JAVASCRIPT.png" align=center alt="condic" height="160"/>

  
são as condições que determinam como executar as instruções de acordo com a entrada.
</p>

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
<br>
_+ Switch_      <br>
"troca" a variável seguindo cada   <br>
_+ case_  <br>
determinante para decisão  <br>
_+ break_  <br>
encerra o caso  <br> 
_+ default_  <br>
forma padrão e também serve para tudo que esteja fora dos _case_'s  <br>
 <br>
   
```
let tempo = (ano)
switch (ano) {
    case ano < 2022:
        console.log('passado')
        break
    case ano == 2022:
        console.log('presente')
        break
    case ano > 2022:
        console.log('futuro')
        break
    default: 
        `o tempo não existe`
}

```
  
  
<p align=center> ======================================================================= </p>


## **Exercícios para Entrega**

#### 1 - Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente.

<p align=center>
<i>logica</i>: variável ou função que recebe um número, <br>
criar condicionante de 1 a 7, com respectivo dia da semana <br>
ex: if(num = 6) {console.log("sexta")}
</p>

#### 2 - Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se os números forem iguais, mostre uma mensagem no console "Os números são iguais".

<p align=center>
uma função que recebe dois valores e verifique qual é maior e apresente-os <br>
com estrutura condicionante, <i>if</i> <b>X</b> for maior, ou se <b>Y</b><br>
caso(if) iguais, apresente a mensagem conforme enunciado.<br>
</p>

#### 3 - Crie um algoritmo que receba três notas de um aluno, calcule sua média e mostre as seguintes mensagens de acordo com cada situação:
##### - Se a media for igual ou maior que 7 - Aprovado
##### - Se a media for maior e igual a cinco e menor que 7 - Recuperação
##### - Se a media for menor que 5 - Reprovado

Primeiro é preciso criar uma função que receba 3 valores, <br>
em seguida, uma variável (med) que sejá o cálcula da média das 3 notas [(x + y + z) /3] <br>
escrever condicional para retorno da situação do aluno. <br>
- med => 7 (aprovado) <br>
- 5 <= med > 7 (recuperação) <br>
- med < 5 (reprovado) <br>

#### 4 - Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.

utilizar estrutura condicional em uma função para verificar <br>
se o valor de entrada é impar devo utilizar "% 2 == 0" <br>

por exemplo, minha variável é x, então escrevo if (x % 2 == 0) { console.log("par")} <br>
quer dizer: se o % ("resto da divisão") de xis por dois for zero então é par <br>
caso não seja igual zero, é impar. <br>

#### 5 - Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.
  
para calcular a idade, recebendo o ano em que a pessoa nasceu, <br>
devo subtrair o ano de nascimento de hoje (2022) <br>
ex: (2022 - 1968); ou (20200 - <i>nasc</i>)
usar estrutura condicional para caso a conta <br>
 _ seja maior de 18, dizer que é maior, <br>
 _ seja menor de 18, é menor de idade. <br>
  
#### 6 - crie um algoritmo que converte dias em horas, quando recebe um número de dias.
  
uma função ou variável que multiplica o **valor recebido de dias** por 24 (horas por dia) 

#### 7 - Crie uma função que recebe 2 parâmetros e retorna o resultado da divisão entre eles.   Além disso, se o resto dessa divisão for zero deverá imprimir no console o valor e dizer que ele é par.

function dividDois(paraM1, paraM2) {
  return ( paraM1 / paraM2) }  
  
se entendi bem ex, if (paraM1 % pamaM2 == 0) {console.log(é par)}  

   
   

<p align="right">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> 
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> 
<img src="https://i.ibb.co/qRxV2fK/download.png" alt="vscode" width="40" height="40"/>
</p>

