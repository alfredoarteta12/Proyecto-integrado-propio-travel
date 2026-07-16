const express = require("express");
const router = express.Router();

const {
    getAllGroupTypes
} = require("../controller/groupTypeController");

router.get("/", getAllGroupTypes);

module.exports = router;