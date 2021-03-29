const newEmployees = (nome) => {
  const employees = {
    id1: () => {
        return `${nome}@trybe.com`
    }, // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
    id2: () => {
      return `${nome}@trybe.com`
    },// Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
    id3: () => {
      return `${nome}@trybe.com`
    },// Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
  }
  return employees;
};

const createEmail = newEmployees('adelinojunior').id1();
console.log(createEmail);

