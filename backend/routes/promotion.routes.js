const express = require("express");

const router = express.Router();

const {
    createPromotion,
    getPromotions,
    getBusinessPromotions
} = require("../controller/promotionController");

// Obtener todas las promociones (Turistas)
router.get("/", getPromotions);

// Obtener promociones de un negocio (Dashboard)
router.get("/business/:id", getBusinessPromotions);

// Crear promoción
router.post("/", createPromotion);

module.exports = router;