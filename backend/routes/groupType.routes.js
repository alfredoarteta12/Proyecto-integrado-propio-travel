const express = require("express");

const router = express.Router();

const {
    getGroupTypes
} = require("../controller/groupTypeController");

router.get("/", getGroupTypes);

module.exports = router;