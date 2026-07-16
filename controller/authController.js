const bcrypt = require("bcrypt");
const Business = require("../models/Business");

const SALT_ROUNDS = 10;

function sanitizeBusiness(business) {
  return {
    id: business.id,
    businessName: business.business_name,
    email: business.email,
    phone: business.phone,
  };
}

/**
 * Registro del socio comercial (necesario para poder luego iniciar sesión).
 * No forma parte estricta de la historia de autenticación, pero la habilita.
 */
async function register(req, res) {
  try {
    const { businessName, email, phone, password } = req.body;

    if (!businessName || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Nombre del negocio, correo y contraseña son obligatorios.",
      });
    }

    const existing = await Business.findByEmail(email);
    if (existing) {
      return res.status(409).json({
        success: false,
        message: "Ya existe una cuenta registrada con este correo.",
      });
    }

    const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);
    const business = await Business.create({
      businessName,
      email,
      phone,
      passwordHash,
    });

    return res.status(201).json({
      success: true,
      message: "Cuenta creada correctamente.",
      business: sanitizeBusiness(business),
    });
  } catch (error) {
    console.error("Error en register:", error.message);
    return res.status(500).json({
      success: false,
      message: "Error interno del servidor.",
    });
  }
}

/**
 * Escenario: Inicio de sesión exitoso / Inicio de sesión no válido.
 */
async function login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Correo electrónico y contraseña son obligatorios.",
      });
    }

    const business = await Business.findByEmail(email);

    // Mensaje genérico para no revelar si el correo existe o no.
    const invalidCredentialsResponse = () =>
      res.status(401).json({
        success: false,
        message: "Correo o contraseña incorrectos.",
      });

    if (!business) {
      return invalidCredentialsResponse();
    }

    const passwordMatches = await bcrypt.compare(
      password,
      business.password_hash
    );

    if (!passwordMatches) {
      return invalidCredentialsResponse();
    }

    // Se regenera el id de sesión al autenticar para evitar session fixation.
    req.session.regenerate((err) => {
      if (err) {
        console.error("Error al regenerar sesión:", err.message);
        return res.status(500).json({
          success: false,
          message: "Error interno del servidor.",
        });
      }

      req.session.business = {
        id: business.id,
        email: business.email,
        businessName: business.business_name,
      };

      return res.status(200).json({
        success: true,
        message: "Acceso concedido.",
        business: sanitizeBusiness(business),
      });
    });
  } catch (error) {
    console.error("Error en login:", error.message);
    return res.status(500).json({
      success: false,
      message: "Error interno del servidor.",
    });
  }
}

/**
 * Escenario: Cierre de sesión.
 * Destruye la sesión en el servidor (se borra de la tabla "session" en
 * PostgreSQL) y limpia la cookie; el acceso al panel exigirá volver a
 * autenticarse.
 */
async function logout(req, res) {
  if (!req.session) {
    return res.status(200).json({
      success: true,
      message: "Sesión cerrada correctamente.",
    });
  }

  req.session.destroy((err) => {
    if (err) {
      console.error("Error al cerrar sesión:", err.message);
      return res.status(500).json({
        success: false,
        message: "Error interno del servidor.",
      });
    }

    res.clearCookie("sid");
    return res.status(200).json({
      success: true,
      message: "Sesión cerrada correctamente.",
    });
  });
}

/**
 * Devuelve los datos del socio comercial autenticado (ruta protegida).
 * Útil para que el frontend valide la sesión al cargar el panel.
 */
async function me(req, res) {
  try {
    const business = await Business.findById(req.business.id);
    if (!business) {
      return res.status(404).json({
        success: false,
        message: "Cuenta no encontrada.",
      });
    }
    return res.status(200).json({ success: true, business });
  } catch (error) {
    console.error("Error en me:", error.message);
    return res.status(500).json({
      success: false,
      message: "Error interno del servidor.",
    });
  }
}

module.exports = { register, login, logout, me };
