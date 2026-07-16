const express = require("express");
const router = express.Router();

const {
    getAllLocations,
    createLocation
} = require("../controller/locationController");

router.get("/", getAllLocations);

router.post("/", createLocation);

module.exports = router;