const express = require("express");
const cors = require("cors");
const session = require("express-session");
const pgSession = require("connect-pg-simple")(session);

const pool = require("./config/db");
const authRoutes = require("./routes/auth.routes");

const app = express();

// Middlewares
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true, // necesario para enviar/recibir la cookie de sesión
  })
);
app.use(express.json());

// Sesiones guardadas en PostgreSQL (tabla "session", se crea sola si no existe)
app.use(
  session({
    store: new pgSession({
      pool,
      tableName: "session",
      createTableIfMissing: true,
    }),
    name: "sid",
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 1000 * 60 * 60 * 2, // 2 horas
    },
  })
);

// Ruta de prueba
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to El Propio Travel API"
    });
});

// Rutas de autenticación del socio comercial
app.use("/api/auth", authRoutes);

module.exports = app;
