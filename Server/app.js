require("dotenv").config()
const express = require("express");
const chalk = require("chalk");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const routes = require("./routes");

const port = 4000;
const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static('../Frontend/build'));


app.use("/", routes);

mongoose
  .connect(
    process.env.DB_CONNECTION_STRING
  )
  .then(async () => {
    app.listen(port, () => {
      console.log(chalk.green(`Server has been started on port ${port}...`));
    });
  });
