"use strict";

const { mongoose } = require("../configs/dbConnection");

const RoomSchema = new mongoose.Schema(
  {
    roomNumber: {
      type: Number,
      unique: true,
      required: true,
    },
    image: String,
    bedType: {
      type: Number,
      required: true,
      enum: [1, 2, 3, 4],
      default: 1,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { collection: "Rooms", timestamps: true }
);

module.exports = mongoose.model("Room", RoomSchema);
