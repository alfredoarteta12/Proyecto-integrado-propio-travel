const express = require("express");
const router = express.Router();

const {
    getAllBusinesses,
    getBusinessById
} = require("../controller/businessController");

router.get("/", getAllBusinesses);

router.get("/:id", getBusinessById);

module.exports = router;