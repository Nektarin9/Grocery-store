const express = require("express");

const router = express.Router({ mergeParams: true });

router.use("/", require("./products"));
router.use("/categories", require("./categories"));
router.use("/", require("./auth"));

module.exports = router;
