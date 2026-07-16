const express = require("express");
const router = express.Router();

const {
    getAllJourneys
} = require("../controller/journeyController");

router.get("/", getAllJourneys);

module.exports = router;