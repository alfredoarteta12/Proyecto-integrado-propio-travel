require("dotenv").config();
const bcrypt = require("bcrypt");
const pool = require("../config/db");

/**
 * Crea un socio comercial de prueba para poder probar el login.
 * Uso: npm run seed
 */
async function seed() {
  const email = "demo@elpropiotravel.com";
  const plainPassword = "Demo1234";

  try {
    const existing = await pool.query(
      "SELECT id FROM business_partners WHERE email = $1",
      [email]
    );

    if (existing.rows.length > 0) {
      console.log(`ℹ️  Ya existe un socio con el correo ${email}`);
      return process.exit(0);
    }

    const passwordHash = await bcrypt.hash(plainPassword, 10);

    await pool.query(
      `INSERT INTO business_partners (business_name, email, phone, password_hash)
       VALUES ($1, $2, $3, $4)`,
      ["Negocio Demo", email, "3001234567", passwordHash]
    );

    console.log("✅ Socio comercial de prueba creado:");
    console.log(`   Email: ${email}`);
    console.log(`   Password: ${plainPassword}`);
    process.exit(0);
  } catch (error) {
    console.error("❌ Error al crear el socio de prueba:", error.message);
    process.exit(1);
  }
}

seed();
