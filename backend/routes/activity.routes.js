const express = require("express");
const router = express.Router();

const {
    getAllActivities
} = require("../controller/activityController");

router.get("/", getAllActivities);

module.exports = router;