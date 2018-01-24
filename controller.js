let model = require('./model');

let dragQueensController = (req, res, next) => {
  let queens = model.getAll();
  res.status(200).json(queens);
};

let queensIdController = (req, res, next) => {
  let id = req.params.id;
  let queen = model.getQueenById(id);

  if (!queen) return next({ error: 404, message: `Could not find queen with id ${id}.` });

  return res.status(200).json(queen);
};

let createQueenController = (req, res, next) => {
  let { name, age, breed, power } = req.body;
  let queen = model.createQueen(name, age, breed, power);

  if (!name || !age || !breed || !power) return next({ error: 400, message: `Fields name, age, breed and power are required.`});

  return res.status(201).json(queen);
};

let updateQueenController = (req, res, next) => {
  let id = req.params.id;
  let { name, age, breed, power } = req.body;
  let queen = model.updateQueen(id, name, age, breed, power);

  if (!queen) return next({ error: 404, message: `Could not find queen with id ${id}.` });

  if (!name || !age || !breed || !power) return next({ status: 400, message: `Fields name and breed are required` });

  return res.status(200).json(queen);
};

let deleteQueenController = (req, res, next) => {
  let id = req.params.id;
  let queen = model.deleteQueen(id);

  if (!queen) return next({ error: 404, message: `Could not find queen with id ${id}.` });

  return res.status(204).json(queen);
};

module.exports = {
  dragQueensController,
  queensIdController,
  createQueenController,
  updateQueenController,
  deleteQueenController
};
