/**** Escreva o código abaixo 👇******/

function somar(a, b){
  return a + b
}
soma = somar(4, 6)
console.log(`O resultado é ${soma}`)
somar ()


function multiplicar(a, b){
  return a * b
}
mult = multiplicar(5, 6)
console.log(`O resultado é ${mult}`)
multiplicar()



function subtrair(a, b){
  return a - b
}
sub = subtrair(4, 6)
console.log(`O resultado é ${sub}`)
subtrair()



function dividir(a, b){
 if (b == 0) {
    return console.log(`Erro: divisão por zero`)
    return
 }else{
    return a / b
 }
}
div = dividir(10, 2)
console.log(`O resultado é ${div}`)
dividir()



function calcularMedia(nota1, nota2, nota3, nota4){
  return (nota1+nota2+nota3+nota4)/4
}
media = calcularMedia(8, 7, 9, 10)
console.log(`A média é ${media}`)
calcularMedia()



function elevarPotencia(base, expoente){
  return base**expoente
}
expo = elevarPotencia(3, 2)
console.log(`O resultado da exponenciação é ${expo}`)
elevarPotencia()



function calcularAreaRetangulo(altura, largura){
  return  altura * largura
}
area = calcularAreaRetangulo(4, 6)
console.log(`A área é ${area}`)
calcularAreaRetangulo()



function verificarParOuImpar(numero) {
  if (numero % 2 == 0) {
    return (`O número ${numero} é par`);
  } else {
    return (`O número ${numero} é ímpar`);
  }
}
console.log(verificarParOuImpar(4))



function calcularRaizQuadrada(numero){
raizQuadrada = Math.sqrt(numero);
console.log(`O valor da raiz quadrada é ${raizQuadrada}`);
}
calcularRaizQuadrada (25)



function calcularHipotenusa(cateto1, cateto2){
hipotenusa = Math.sqrt(cateto1**2 + cateto2**2);
console.log(`O valor da hipotenusa é ${hipotenusa}`);
}
calcularHipotenusa (3, 4)


/**** Escreva o código acima ☝️******/

//Não altere as linhas abaixo
module.exports = {
  somar,
  multiplicar,
  subtrair,
  dividir,
  calcularMedia,
  elevarPotencia,
  calcularAreaRetangulo,
  verificarParOuImpar,
  calcularRaizQuadrada,
  calcularHipotenusa,
};
