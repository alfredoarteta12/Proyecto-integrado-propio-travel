const express = require("express");

const router = express.Router();

const {
    createPromotion,
    getPromotions,
    getBusinessPromotions,
    updatePromotion,
    deletePromotion
} = require("../controller/promotionController");

// =======================
// CONSULTAS
// =======================

// Todas las promociones (Turistas)
router.get("/", getPromotions);

// Promociones del negocio autenticado
router.get("/business/:id", getBusinessPromotions);

// =======================
// CRUD
// =======================

// Crear promoción
router.post("/", createPromotion);

// Actualizar promoción
router.put("/:id", updatePromotion);

// Eliminar promoción
router.delete("/:id", deletePromotion);

module.exports = router;