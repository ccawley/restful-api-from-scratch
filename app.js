let express = require("express");
let app = express();
let PORT = process.env.PORT || 3000;
let bodyParser = require("body-parser");
let morgan = require("morgan");
let controller = require("./controller");

app.disable("x-powered-by");
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));
app.use(bodyParser.json());

// routes here:
app.get("/queens", controller.dragQueensController);
app.get("/queens/:id", controller.queensIdController);

app.use((req, res, next) => {
  res.status(404).json({ error: { message: 'Not found' }});
});

app.use((err, req, res, next) => {
  const status = err.status || 500;
  console.log(err)
  res.status(status).json({ error: err });
});

const listener = () => `Listening on port ${PORT}!`;
app.listen(PORT, listener);

module.exports = app;
