let uuid = require('uuid/v4');
let queens = [
  {
    id: uuid(),
    name: "RuPaul",
    age: 21,
    breed: "Mother",
    power: "Charisma, Uniqueness, Nerve, Talent"
  },
  {
    id: uuid(),
    name: "Katya Zomolodchikova",
    age: 47,
    breed: "Working Woman",
    power: "Gymnastics"
  }
];

function getAll() {
  return queens;
}

function getQueenById(id) {
  let queen = queens.find(queen => queen.id === id);
  return queen;
}

function createQueen(name, age, breed, power) {
  let queen = { id: uuid(), name, age, breed, power };
  queens.push(queen);
  return queen;
}

function updateQueen(id, name, age, breed, power) {
  let queen = queens.find(queen => queen.id === id);
  queen.name = name;
  queen.age = age;
  queen.breed = breed;
  queen.power = power;
  return queen;
}

function deleteQueen(id) {
  let queen = queens.find(queen => queen.id === id);
  let index = queens.indexOf(queen);
  queens.splice(index, 1);
  return queen;
}

module.exports = {
  getAll,
  getQueenById,
  createQueen,
  updateQueen,
  deleteQueen
};
