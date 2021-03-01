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

function meuMenorValor(numerosInteiros) {
  let indexMenorValor = 0;

  for (let index in numerosInteiros) {
    
    if (numerosInteiros[index] < numerosInteiros[indexMenorValor]) {
      indexMenorValor = index;
    }
    
  }
  return indexMenorValor;
}

let numerosInteiros = [2, 4, 6, 7, 10, 0, -3];
console.log(meuMenorValor(numerosInteiros));