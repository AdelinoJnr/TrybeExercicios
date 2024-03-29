// Parte 1

const assert = require('assert');

const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  assert.strictEqual(rectangleArea(...rectangle), rectangle[0] * rectangle[1]) // altere a chamada da funcao rectangleArea
});

// Parte 2

const assert = require('assert');

// escreva sum abaixo
const sum = (...numbers) => {
  return numbers.reduce((acc, curr) => acc + curr, 0);
};

assert.strictEqual(sum(), 0);
assert.strictEqual(sum(1), 1);
assert.strictEqual(sum(1, 2), 3);
assert.strictEqual(sum(1, 2, 3), 6);
assert.strictEqual(sum(1, 2, 3, 4), 10);

// Parte 3

const assert = require('assert');

const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};

// complete a assinatura da função abaixo
const personLikes = ({name, age, likes}) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;

assert.strictEqual(personLikes(alex), 'Alex is 26 years old and likes fly fishing.');
assert.strictEqual(personLikes(gunnar), 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.');

// Parte 4

const assert = require('assert');

const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

// escreva filterPeople abaixo
const filterPeople = (myArrayObj) => {
  return myArrayObj.filter((item) => {
    if (item.bornIn >= 1900 && item.bornIn < 2000 && item.nationality === 'Australian') return item;
  });
};

const filteredPeople = filterPeople(people);

assert.deepStrictEqual(filteredPeople[0], { name: 'Nicole', bornIn: 1992, nationality: 'Australian' });
assert.deepStrictEqual(filteredPeople[1], { name: 'Toby', bornIn: 1901, nationality: 'Australian' });

// Parte 5

const assert = require('assert');

const myList = [1, 2, 3];

// escreva swap abaixo
const swap = (myList) => {
  return [myList[2], myList[1], myList[0]];
};

const swappedList = swap(myList);

assert.strictEqual(swappedList[0], 3);
assert.strictEqual(swappedList[1], 2);
assert.strictEqual(swappedList[2], 1);

// Parte 6

const assert = require('assert');

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo
const toObject = (arr) => {
  return {
    name: arr[0],
    brand: arr[1],
    year: arr[2],
  }
};


assert.deepStrictEqual(toObject(palio), { name: 'Palio', brand: 'Fiat', year: 2019 });
assert.deepStrictEqual(toObject(shelbyCobra), { name: 'Shelby Cobra', brand: 'Ford', year: 1963 });
assert.deepStrictEqual(toObject(chiron), { name: 'Chiron', brand: 'Bugatti', year: 2016 });

// Parte 7

const assert = require('assert');

const ships = [
  {
      name: 'Titanic',
      length: 269.1,
      measurementUnit: 'meters',
  },
  {
      name: 'Queen Mary 2',
      length: 1132,
      measurementUnit: 'feet',
  },
  {
      name: 'Yamato',
      length: 256,
      measurementUnit: 'meters',
  },
];

// escreva shipLength abaixo
const shipLength = ({name, length, measurementUnit}) => {
  return `${name} is ${length} ${measurementUnit} long`;
};

assert.strictEqual(shipLength(ships[0]), 'Titanic is 269.1 meters long');
assert.strictEqual(shipLength(ships[1]), 'Queen Mary 2 is 1132 feet long');
assert.strictEqual(shipLength(ships[2]), 'Yamato is 256 meters long');

// Parte 8

const assert = require('assert');

// escreva greet abaixo
const greet = (name, saudacao = 'Hi') => {
  return `${saudacao} ${name}`
};

assert.strictEqual(greet('John'), 'Hi John');
assert.strictEqual(greet('John', 'Good morning'), 'Good morning John');
assert.strictEqual(greet('Isabela', 'Oi'), 'Oi Isabela');