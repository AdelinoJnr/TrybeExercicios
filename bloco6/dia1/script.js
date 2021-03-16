const boxCurriculo = document.querySelector('.curriculo').value;
const btnSubmit = document.getElementById('btn-submit').value;
const inputNome = document.getElementById('nome').value;
const inputEmail = document.getElementById('email-user').value;
const inputCpf = document.getElementById('your-cpf').value;
const inputEndereco = document.getElementById('endereco-user').value;
const inputCidade = document.getElementById('cidade-user').value;
const inputEstado = document.getElementById('estado-user').value;
const inputComplemento = document.getElementById('complemento').value;
const inputText = document.getElementById('resumo-curriculo').value;
const inputCargo = document.getElementById('cargo').value;
const inputData = document.getElementById('data-inicio').value;
const arrayInputs = [];

function stopDefAction(event) {
  event.preventDefault();
  testDate();
  addCurriculo();
}

function addCurriculo() {
  transArray();
  console.log(arrayInputs)
  for (let index = 0; index < 10; index += 1) {
    const elementP = document.createElement('p');
    elementP.className = 'value';

  }
  elementP.innerHTML = inputNome.value
  boxCurriculo.appendChild(elementP);
}

function transArray() {
  arrayInputs.push(inputNome);
  arrayInputs.push(inputEmail);
  arrayInputs.push(inputCpf);
  arrayInputs.push(inputEndereco);
  arrayInputs.push(inputCidade);
  arrayInputs.push(inputEstado);
  arrayInputs.push(inputComplemento);
  arrayInputs.push(inputText);
  arrayInputs.push(inputCargo);
  arrayInputs.push(inputData);
}

function btnClick() {
  btnSubmit.addEventListener('click', stopDefAction, false);
}

function testDate() {
  const valueInput = document.getElementById('data-inicio').value.split('/');
  if (valueInput[0] < 1 || valueInput[0] > 31) {
    alert('Dia informado incorretamente');
  } else if (valueInput[1] < 1 || valueInput[1] > 12) {
    alert('Mes informado incorretamente');
  } else if (valueInput[2] < 0) {
    alert('Ano informado incorrretamente');
  }
}
btnClick();