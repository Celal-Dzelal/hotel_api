"use strict";

const router = require("express").Router();
const {
  list,
  create,
  read,
  update,
  deleteRoom,
} = require("../controllers/room");

router.route("/").get(list).post(create);

router.route("/:id").get(read).put(update).patch(update).delete(deleteRoom);

module.exports = router;
