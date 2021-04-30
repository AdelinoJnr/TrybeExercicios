// const boxCurriculo = document.querySelector('.curriculo').value;
// const btnSubmit = document.getElementById('btn-submit').value;
// const inputNome = document.getElementById('nome').value;
// const inputEmail = document.getElementById('email-user').value;
// const inputCpf = document.getElementById('your-cpf').value;
// const inputEndereco = document.getElementById('endereco-user').value;
// const inputCidade = document.getElementById('cidade-user').value;
// const inputEstado = document.getElementById('estado-user').value;
// const inputComplemento = document.getElementById('complemento').value;
// const inputText = document.getElementById('resumo-curriculo').value;
// const inputCargo = document.getElementById('cargo').value;
// const inputData = document.getElementById('data-inicio').value;
// const arrayInputs = [];

// function addCurriculo() {
//   transArray();
//   for (let index = 0; index < 10; index += 1) {
//     const elementP = document.createElement('p');
//     elementP.className = 'value';

//   }
//   elementP.innerHTML = inputNome.value
//   boxCurriculo.appendChild(elementP);
// }


const btnSubmit = document.getElementById('btn-submit');
const inputData = document.getElementById('date-picker');

// inputData.addEventListener('blur', () => {
//   const value = inputData.value;
//   console.log();
// });

function stopDefAction(event) {
  event.preventDefault();
}

btnSubmit.addEventListener('click', stopDefAction, false);

const picker = new Pikaday({
  field: document.getElementById('datepicker'),
  format: 'D/M/YYYY',
  toString(date, format) {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
  },
});