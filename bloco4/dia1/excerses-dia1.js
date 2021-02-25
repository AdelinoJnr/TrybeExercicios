// Exercicio 1

// let a = 10;
// let b = 50;
// let soma;
// let subtracao;
// let multiplicacao;
// let divisao;

// //Adição
// soma = a + b;

// //Subtração
// subtracao = a - b;

// //Multiplicação
// multiplicacao = a * b;

// //Divisão
// divisao = a / b;

// Exercicio 2

// if (a > b) {
//     console.log('o numero maior é: ' + a)
// } else if (b > a) {
//     console.log('o numero maior é: ' + b)
// } else {
//     console.log('os numeros são iguais')
// }


// Exercicio 3

// let a = 5;
// let b = 10;
// let c = 15;

// if (a > b || a > c) {
//     console.log('O numero maior é: ' + a)
// } else if (b > a || b > c) {
//     console.log('O numero maior é: ' + b)
// } else {
//     console.log('O numero maior é: ' + c)
// }


// Exercicio 4

// let a = -6;

// if (a > 0) {
//     console.log('O numero ' + a + ' é positivo')
// } else if (a == 0) {
//     console.log('O numero é igual a zero')
// } else if (a < 0) {
//     console.log('O numero ' + a + ' é negativo')
// }

// Exercicio 5

// let ang1 = 60;
// let ang2 = 70;
// let ang3 = 50;

// let soma = (ang1 + ang2 + ang3) == 180;

// console.log(soma)


// Exercicio 6

// let xadrez = 'Cavalo';
// let pecaXadrez = xadrez.toLowerCase();

// if (pecaXadrez == 'cavalo') {
//     console.log('Essa peça anda em "L"');
// } else if (pecaXadrez == 'bisbo') {
//     console.log('Essa peça anda na diagonal');
// } else if (pecaXadrez == 'torre') {
//     console.log('Essa peça anda na verdical ou horizontal');
// } else if (pecaXadrez == 'rainha') {
//     console.log('Essa peça anda na diagonal, vertical e horizontal');
// } else if (pecaXadrez == 'rei') {
//     console.log('Essa peça anda apenas uma casa para qualquer lado do tabuleiro');
// } else if (pecaXadrez == 'peao') {
//     console.log('Essa peça anda uma casa para frente quando tiver feito algum movimento no jogo, ou duas para frente quando nao tiver feito nenhum movimento. Alem disso, essa peça come peças na diagonal');
// } else {
//     console.log('Peça digitada invalida')
// }

// Exercicio 7

// let porcentagem = 89;

// if (porcentagem >= 90 && porcentagem <= 100) {
//     console.log('Sua nota é: A')
// } else if (porcentagem >= 80) {
//     console.log('Sua nota é: B')
// } else if (porcentagem >= 70) {
//     console.log('Sua nota é: C')
// } else if (porcentagem >= 60) {
//     console.log('Sua nota é: D')
// } else if (porcentagem >= 50) {
//     console.log('Sua nota é: E')
// } else if (porcentagem < 50 && porcentagem >= 0) {
//     console.log('Sua nota é: F')
// } else {    
//     console.log('Nota invalida')
// }


// Exercicio 8

// let n1 = 5;
// let n2 = 3;
// let n3 = 121;

// if (n1 % 2 == 0 || n2 % 2 == 0 || n3 % 2 == 0) {
//     console.log('True')
// } else {
//     console.log('False')
// }

// Exercicio 9 

// let n1 = 12;
// let n2 = 4;
// let n3 = 120;

// if (n1 % 2 == 1 || n2 % 2 == 1 || n3 % 2 == 1) {
//     console.log('True')
// } else {
//     console.log('False')
// }

// Exercicio 10

// let valorCusto = 1.50;
// let valorVenda = 2.75;

// let lucro = valorVenda - (valorCusto + (valorCusto * 20) / 100);
// let lucroTotal = lucro * 1000;

// console.log('lucro por cada item: ' + lucro + 'R$')
// console.log('lucro total se vender mil itens: ' + lucroTotal + 'R$')

// Exercicio 11

// let salario = 2500;
// let salarioBruto = 0;

// if (salario <= 1556.94) {
//     salarioBruto = salario - (salario * 8 / 100)
// } else if (salario >= 1556.95 && salario <= 2594.92) {
//     salarioBruto = salario - (salario * 9 / 100)
// } else if (salario >= 2594.93 && salario <= 5189.82) {
//     salarioBruto = salario - (salario * 11 / 100)
// } else if (salario > 5189.82) {
//     salarioBruto = salario - 570.88
// } else {
//     console.log('Digite um salario valido')
// }

// console.log('O salario na carteira é: ' + salario);
// console.log('O salario bruto com os descontos é: ' + salarioBruto);
