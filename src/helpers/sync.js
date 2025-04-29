"use strict";

module.exports = async function () {
  return null;

  if (process.env.NODE_ENV === "production") {
    console.warn("❌ dropDatabase() is disabled in production environment.");
    return;
  }

  const { mongoose } = require("../configs/dbConnection");

  await mongoose.connection.dropDatabase();
  console.log("✅ Database and all data DELETED (non-production mode).");
};
