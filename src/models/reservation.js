"use strict";

const { mongoose } = require("../configs/dbConnection");

const ReservationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    roomId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
      required: true,
      unique: true,
    },
    arrivalDate: {
      type: Date,
      required: true,
      default: Date.now(),
    },
    departureDate: {
      type: Date,
      required: true,
      default: new Date(Date.now() + 24 * 60 * 60 * 1000),
    },
    guestNumber: {
      type: Number,
      required: true,
      default: 1,
    },
    night: {
      type: Number,
      default: () => {
        (departureDate - arrivalDate) / (1000 * 60 * 60 * 24);
      },
    },
  },
  { collection: "Reservations", timestamps: true }
);

module.exports = mongoose.model("Reservation", ReservationSchema);
