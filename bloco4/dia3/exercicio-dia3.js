// Exercicio 1

// let n = 5;
// let ast = '*';


// if (n > 1) {

//     for (let index1 = 1; index1 < n; index1 += 1) {

//         ast += '*';
//     }

//     for (let index2 = 0; index2 < n; index2 += 1) {
//         console.log(ast)
//     }

// } else {
//     console.log('Número invalido')
// }

// Exercicio 2

// let n = 5;
// let ast = '';

// for (let index1 = 0; index1 < n; index1 += 1) {

//   ast += '*';
//   console.log(ast)
// }

// Exercicio 3

// let n = 5;
// let simbol = '*';
// let inputLine = '';
// let delimitador = n;

// for (let index = 0; index < n; index += 1) {

//   for (let index2 = 1; index2 <= n; index2 += 1) {

//     if (index2 < delimitador) {
//       inputLine += ' '
//     } else {
//       inputLine += simbol
//     }
//   }
//   console.log(inputLine);
//   inputLine = '';
//   delimitador -= 1;
// }

// Exercicio 4

let n = 5;
let simbol = '*';
let inputLine = '';
let delimitadorCenter = Math.trunc(n / 2) + 1; // 3
let delimitadorRight = delimitadorCenter - 1; // 2
let delimitadorLeft = delimitadorCenter + 1; // 4

for (let indexRow = 1; indexRow <= delimitadorCenter; indexRow += 1) {

  for (let indexColumn = 1; indexColumn <= n; indexColumn += 1) {

    if (indexColumn > delimitadorRight && indexColumn < delimitadorLeft) {
      inputLine += simbol;
    } else {
      inputLine += ' ';
    }
  }

  console.log(inputLine);
  inputLine = '';
  delimitadorLeft += 1;
  delimitadorRight -= 1;

}