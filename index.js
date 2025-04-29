"use strict";

/*//! ---------------------------- Initial Commands ---------------------------- */

//* npm init -y
//* npm i express dotenv mongoose
//* npm i morgan swagger-autogen swagger-ui-express redoc-express
//* mkdir logs
//* node swaggerAutogen.js
//* nodemon or npm start

const express = require("express");
const app = express();

/*//! ---------------------------- Required Modules ---------------------------- */

require("dotenv").config();
const PORT = process.env?.PORT || 8000;

/*//! ----------------------------- Configurations ----------------------------- */

const { dbConnection } = require("./src/configs/dbConnection");
dbConnection();

/*//! ------------------------------- Middlewares ------------------------------ */

app.use(express.json());

app.use(require("./src/middlewares/logger"));

//* Authentication gelecek

app.use(require("./src/middlewares/queryHandler"));

/*//! --------------------------------- Routes --------------------------------- */

app.use("/", require("./src/routes/index"));

app.all("/", (req, res) =>
  res.send({
    error: false,
    message: "Welcome to Hotel By D.Z.E.L.",
    docs: {
      swagger: "/documents/swagger",
      redoc: "/documents/redoc",
      json: "/documents/json",
    },
    user: req.user,
  })
);

/*//! ------------------------------ errorHandler ------------------------------ */

app.use(require("./src/middlewares/errorHandler"));

/*//! ------------------------------- Run Server ------------------------------- */

app.listen(PORT, () => console.log(`http://127.0.0.1:${PORT}`));

/*//! ----------------------------- Syncronization ----------------------------- */

// require("./src/helpers/sync")() //* Run it only once
