"use strict";

const { mongoose } = require("../configs/dbConnection");

const ReservationSchema = new mongoose.Schema({}, {});

module.exports = mongoose.model("Reservation", ReservationSchema);
