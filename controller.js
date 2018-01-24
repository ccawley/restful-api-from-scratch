let model = require('./model')

let dragQueensController = (req, res, next) => {
  let queens = model.getAll()

  res.json(queens)
}

module.exports = {
  dragQueensController
}
