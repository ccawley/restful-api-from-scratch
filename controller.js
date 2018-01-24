let model = require('./model');

let dragQueensController = (req, res, next) => {
  let queens = model.getAll();

  res.status(200).json(queens);
}

let queensIdController = (req, res, next) => {
  let id = req.params.id;
  let queen = model.getQueenById(id);

  if (!queen) return next({ error: 404, message: `Could not find queen with id ${id}.` });

  return res.status(200).json(queen);
}

module.exports = {
  dragQueensController,
  queensIdController
}
