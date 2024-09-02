var nome = prompt("Qual seu nome ?")
var idade = prompt (" Qual sua idade")
alert(" Seu nome e sua idade é: "  + nome + ","  + idade + " anos ")
confirm ( "Você esta estudando direitnho ?")
alert (" Parabéns")
confirm (" Faça uma conta pra mim ! ")
var n1 = Number(prompt ( "Digite um numero "))
var n2 = Number(prompt ("Digite outro numero"))
var s = n1 + n2
alert (" a soma entre," + n1 + " e " + n2 +  " é: "  + s)// a soma dos numeros
//alert (`A soma entre ${n1} e ${n2} é igual a: ${s}`) // a soma dos numeros também com um jeito mas moderno
document.write (`<h2> Seu nome tem, ${nome.length} letras <h2>`) // tenho que vê como fazer isso dentro do css,pq isso não é um titulo
document.write (` Seu nome em maiusculo é : ${nome.toUpperCase()} <br>`)
document.write (` Seu nome em minusculo é : ${nome.toLowerCase()} <br>`)
var numero = 5;
var numeroArredondado = numero.toFixed(2);
document.write (` Seu numero arredondado é :  ${numeroArredondado}`)
