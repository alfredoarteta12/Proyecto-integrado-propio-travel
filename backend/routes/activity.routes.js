const express = require("express");
const router = express.Router();

const {
    getActivities
} = require("../controller/activityController");

router.get("/", getActivities);

module.exports = router;