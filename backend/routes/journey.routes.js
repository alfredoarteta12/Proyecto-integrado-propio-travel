const express = require("express");

const router = express.Router();

const {
    getJourneys
} = require("../controller/journeyController");

router.get("/", getJourneys);

module.exports = router;