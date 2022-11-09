// Solicite 2 números para operação:
// Apresente as operaçôes e os resultados escrevendo no documento (função write).
// Crie constantes com as operações de +, -, *, /, %, ** e raiz para os números solicitados.

const numberOne = Number(prompt("Digite o primeiro número: "))
const numberTwo = Number(prompt("Digite o segundo número: "))

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const mul = numberOne * numberTwo
const div = numberOne / numberTwo
const rem = numberOne % numberTwo
const exp = numberOne ** numberTwo
const sqr = numberOne ** (1/numberTwo)

document.write(`A soma de ${numberOne} e ${numberTwo} é: ${sum} <br>`)
document.write(`A subtração de ${numberOne} e ${numberTwo} é: ${sub} <br>`)
document.write(`A multiplicação de ${numberOne} e ${numberTwo} é: ${mul} <br>`)
document.write(`A divisão de ${numberOne} e ${numberTwo} é: ${div.toFixed(2)} <br>`)
document.write(`A resto de ${numberOne} e ${numberTwo} é: ${rem} <br>`)
document.write(`A potência de ${numberOne} e ${numberTwo} é: ${exp} <br>`)
document.write(`A raiz de ${numberTwo} de ${numberOne} é: ${sqr.toFixed(2)} <br>`)