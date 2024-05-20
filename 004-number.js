/* 
Number 
parseInt
parseFloat
*/

// conversão de string para numero
var idade = "20"
console.log(typeof idade, idade)
var idade = Number("20")
console.log(typeof idade, idade)

//converter boolean para numero
var numero = Number(false)
console.log(typeof numero,numero)
var numero = Number(true)
 console.log(typeof numero ,numero)

// cnumeroer data para numero
var numero = Number(new Date(1715085515569))
console.log(typeof numero, numero)

// converter de string para numero usando o parseint
var n = "29.23"
console.log(typeof n, n)
console.log(typeof parseInt(n), parseInt(n))

// converter de string para numero usando o parseFloat
var n = "29.23"
console.log(typeof n, n)
console.log(typeof parseFloat(n), parseFloat(n))