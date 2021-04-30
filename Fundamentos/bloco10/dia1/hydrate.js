const hydrate = (string) => {
  
  const retiraNumeros = string
    .split(' ')
    .filter((element) => Number(element))
    .reduce((acc, curr) => {
      const numberAtual = parseInt(curr);
      return acc += numberAtual;
  }, 0);

  return retiraNumeros === 1
    ? `${retiraNumeros} copo de água`
    : `${retiraNumeros} copos de água`;
};

console.log(hydrate('4 caipirinhas e 2 cervejas'))
module.exports = hydrate;