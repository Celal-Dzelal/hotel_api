"use strict";

const { mongoose } = require("../configs/dbConnection");

const RoomSchema = new mongoose.Schema({}, {});

module.exports = mongoose.model("Room", RoomSchema);
