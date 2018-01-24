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

module.exports = {
  getAll,
  getQueenById
};
