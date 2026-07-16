require("dotenv").config();

const { Pool } = require("pg");

// Se puede usar DATABASE_URL (ej: Render, Railway, Supabase)
// o variables sueltas (PGHOST, PGUSER, etc.) para desarrollo local.
const pool = new Pool(
  process.env.DATABASE_URL
    ? {
        connectionString: process.env.DATABASE_URL,
        ssl:
          process.env.DB_SSL === "true"
            ? { rejectUnauthorized: false }
            : false,
      }
    : {
        host: process.env.PGHOST || "localhost",
        port: process.env.PGPORT || 5432,
        user: process.env.PGUSER || "postgres",
        password: process.env.PGPASSWORD || "postgres",
        database: process.env.PGDATABASE || "el_propio_travel",
      }
);

pool.on("connect", () => {
  console.log("🟢 Conectado a PostgreSQL");
});

pool.on("error", (err) => {
  console.error("🔴 Error inesperado en el pool de PostgreSQL:", err.message);
});

module.exports = pool;
