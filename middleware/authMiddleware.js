/**
 * Protege rutas privadas del panel del socio comercial.
 * Verifica que exista una sesión activa (req.session.business),
 * creada por authController.login y guardada en PostgreSQL.
 */
function authMiddleware(req, res, next) {
  if (!req.session || !req.session.business) {
    return res.status(401).json({
      success: false,
      message: "No autenticado. Inicia sesión para continuar.",
    });
  }

  req.business = req.session.business; // { id, email, businessName }
  next();
}

module.exports = authMiddleware;
