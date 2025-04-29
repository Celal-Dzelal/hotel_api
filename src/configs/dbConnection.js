"use strict";

const mongoose = require("mongoose"); //* MongoDB Connection

const dbConnection = () => {
  mongoose
    .connect(process.env.MONGODB)
    .then(() => console.log("* * DB CONNECTED * *"))
    .catch((error) => console.log("! ! DB NOT CONNECTED ! !", error));
};

module.exports = {
  mongoose,
  dbConnection,
};
