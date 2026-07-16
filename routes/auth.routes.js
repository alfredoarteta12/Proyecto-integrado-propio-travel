const express = require("express");
const router = express.Router();

const { register, login, logout, me } = require("../controller/authController");
const authMiddleware = require("../middleware/authMiddleware");

// Rutas públicas
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

// Ruta protegida: confirma la sesión actual del socio comercial
router.get("/me", authMiddleware, me);

module.exports = router;
