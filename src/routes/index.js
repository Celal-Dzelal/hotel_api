"use strict";

const router = require("express").Router();

//* auth

router.use("/users", require("./user"));

router.use("/reservations", require("./reservation"));

router.use("/rooms", require("./room"));

module.exports = router;
