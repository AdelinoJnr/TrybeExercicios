function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exercicio 1
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const selectDiv = document.querySelector('.buttons-container');

function createDaysCalender() {
  const myUlList = document.getElementById('days')

  for (let index = 0; index < dezDaysList.length; index += 1) {
    let days = dezDaysList[index];
    let createListDays = document.createElement('li');
    createListDays.innerHTML = days;
    createListDays.className = 'day';
    if (days === 25 || days === 24 || days === 31) {
      createListDays.className += ' holiday'
    }
    if (days === 4 || days === 11 || days === 18 || days === 25) {
      createListDays.className += ' friday'
    }
    myUlList.appendChild(createListDays)
  }
}
createDaysCalender();

// Exercicio 2
function createBtnFeriados(btnStringHoliday) {
  const btnFeriados = document.createElement('button');
  btnFeriados.className = 'btn-feriados'
  btnFeriados.innerHTML = btnStringHoliday;
  selectDiv.appendChild(btnFeriados);
}

createBtnFeriados('Feriados');

// Exercicio 3

function colorBtnHoliday() {
  const listHoliday = document.getElementsByClassName('holiday');
  const btnFeriados = document.querySelector('.btn-feriados');
  btnFeriados.addEventListener('click', function() {
    for (let index = 0; index < listHoliday.length; index += 1) {
      listHoliday[index].style.backgroundColor = "rgb(238,12,238)";
    }
  })
}
colorBtnHoliday()

// Exercicio 4

function createBtnFriday(btnStringFriday) {
  let btn = document.createElement('button');
  btn.id = 'btn-friday';
  btn.innerHTML = btnStringFriday;
  selectDiv.appendChild(btn);
}

createBtnFriday('Sexta-Feira')

function colorBtnFriday() {
  let divFridays = document.getElementsByClassName('friday');
  let btn = document.getElementById('btn-friday');
  let innerTextSextou = 'SEXTOOU'
  btn.addEventListener('click', function() {
    for (let index = 0; index < divFridays.length; index += 1) {
      if (divFridays[index].innerHTML !== innerTextSextou) {
        divFridays[index].innerHTML = innerTextSextou;
      } else {
        divFridays[index].innerHTML = divFridays[index].innerHTML;
      }
    }
  });
}
colorBtnFriday();