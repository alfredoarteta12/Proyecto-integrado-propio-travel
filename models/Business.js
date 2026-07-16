const pool = require("../config/db");

/**
 * Modelo de acceso a datos para la tabla business_partners.
 * Representa al socio comercial (negocio) que se autentica en la plataforma.
 */
const Business = {
  /**
   * Busca un socio comercial por correo electrónico.
   * Incluye el hash de la contraseña (uso interno para login).
   */
  async findByEmail(email) {
    const { rows } = await pool.query(
      `SELECT id, business_name, email, phone, password_hash, created_at
       FROM business_partners
       WHERE email = $1`,
      [email]
    );
    return rows[0] || null;
  },

  /**
   * Busca un socio comercial por id. No devuelve el hash de la contraseña.
   */
  async findById(id) {
    const { rows } = await pool.query(
      `SELECT id, business_name, email, phone, created_at
       FROM business_partners
       WHERE id = $1`,
      [id]
    );
    return rows[0] || null;
  },

  /**
   * Crea un nuevo socio comercial. Espera que passwordHash ya venga hasheado.
   */
  async create({ businessName, email, phone, passwordHash }) {
    const { rows } = await pool.query(
      `INSERT INTO business_partners (business_name, email, phone, password_hash)
       VALUES ($1, $2, $3, $4)
       RETURNING id, business_name, email, phone, created_at`,
      [businessName, email, phone, passwordHash]
    );
    return rows[0];
  },
};

module.exports = Business;
