// Parte 1


// let info = {
//   personagem: "Margarida",
//   origem: "Pato Donald",
//   nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
// };

// console.log('Bem-vinda, ' + info.personagem);

// info['recorrente'] = 'Sim';

// console.log(info);

// for (let key in info) {
//   console.log(info[key]);
// }

// for (let key in info) {
//   console.log(key);
// }

// let info = {
//   personagem: 'Tio Patinhas',
//   origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//   nota: 'O ultimo MacPatinhas',
//   recorrente: 'Sim'
// }

// Parte 2

// Exercicio 1

// function returnPalindromo(string) {

// }

// Exercicio 2

// function maiorNumeroInteiro(numerosInteiros) {

//   let indexMaiorValor = 0;

//   for (let index in numerosInteiros) {

//     if (numerosInteiros[index] > numerosInteiros[indexMaiorValor]) {
//       indexMaiorValor = index;
//     }

//   }

//   return indexMaiorValor;
// }

// let numerosInteiros = [2, 3, 6, 7, 10, 1];

// console.log(maiorNumeroInteiro(numerosInteiros));

// Exercicio 3

// function meuMenorValor(numerosInteiros) {
//   let indexMenorValor = 0;

//   for (let index in numerosInteiros) {

//     if (numerosInteiros[index] < numerosInteiros[indexMenorValor]) {
//       indexMenorValor = index;
//     }

//   }
//   return indexMenorValor;
// }

// let numerosInteiros = [2, 4, 6, 7, 10, 0, -3];
// console.log(meuMenorValor(numerosInteiros));

// Exercicio 4

// function maiorQuantidadeCaractere(listaNomes) {
//     let maiorCaractere = listaNomes[0];

//     for (let index in listaNomes) {

//         if (listaNomes[index].length > maiorCaractere.length) {
//             maiorCaractere = listaNomes[index];
//         }
//     }

//     return maiorCaractere
// }

// let listaNomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
// console.log(maiorQuantidadeCaractere(listaNomes));

// Exercicio 5

// function numeroQueMaisRepete(listaNumeros) {
//   let numeroRepete = 0;
//   let indexNumeroRepete = 0;
//   let quantasVezesRepete = 0;

//   for (let index in listaNumeros) {
//     let verificadorNumeroRepetido = listaNumeros[index];

//     for (let index2 in listaNumeros) {

//       if (verificadorNumeroRepetido === listaNumeros[index2]) {
//         quantasVezesRepete += 1;
//       }
//     }

//     if (quantasVezesRepete > numeroRepete) {
//       indexNumeroRepete = index;
//       numeroRepete = quantasVezesRepete;
//     }

//     quantasVezesRepete = 0;
//   }

//   return listaNumeros[indexNumeroRepete];

// }

// let listaNumeros = [3, 5, 2, 2, 8, 2, 3];
// console.log(numeroQueMaisRepete(listaNumeros));

// Exercicio 6

// function somaNumeroInteiro(numeroInteiro) {
//   let soma = 0;

//   for (let index = 1; index <= numeroInteiro; index += 1) {
//     soma += index;
//   }

//   return soma;
// }

// let numeroInteiro = 5;
// console.log(somaNumeroInteiro(6));

// Exercicio 7

// function verificaFImPalavra(string1, string2) {

//   let stringWorld = string1;
//   let stringEnding = stringWorld.endsWith(string2);

//   return stringEnding
// }

// console.log(verificaFImPalavra('adelino junior', 'ior'));
