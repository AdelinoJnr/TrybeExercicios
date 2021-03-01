function returnMaiorValor() {

  let array = [2, 3, 6, 7, 10, 1];
  let indexMaiorValor = array[0];
  
  for (let index = 0; index < array.length; index += 0) {
    
    if (array[index] > indexMaiorValor) {
      indexMaiorValor = array[index];
    }
  
  }

  return indexMaiorValor
}

console.log(returnMaiorValor())