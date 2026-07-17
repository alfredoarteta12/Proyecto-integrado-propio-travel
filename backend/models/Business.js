const pool = require("../config/db");

class Business {

    // Buscar por email
    static async findByEmail(email) {

        const query = `
            SELECT * FROM business
            WHERE email = $1;
        `;

        const result = await pool.query(query, [email]);

        return result.rows[0];
    }

    // Buscar por teléfono
    static async findByPhone(phone) {

        const query = `
            SELECT * FROM business
            WHERE phone = $1;
        `;

        const result = await pool.query(query, [phone]);

        return result.rows[0];
    }
    // Buscar negocio para login
static async loginBusiness(email) {

    const query = `
        SELECT * FROM business
        WHERE email = $1;
    `;

    const result = await pool.query(query, [email]);

    return result.rows[0];
}

    // Crear negocio
  // Crear negocio
static async createBusiness(data) {

    const client = await pool.connect();

    try {

        await client.query("BEGIN");

        const {
            business_name,
            email,
            phone,
            password,
            address,
            latitude,
            longitude
        } = data;

        // Insertar negocio
        const businessResult = await client.query(
            `
            INSERT INTO business (
                business_name,
                email,
                phone,
                password
            )
            VALUES ($1, $2, $3, $4)
            RETURNING *;
            `,
            [
                business_name,
                email,
                phone,
                password
            ]
        );

        const business = businessResult.rows[0];

        // Insertar ubicación
        await client.query(
            `
            INSERT INTO location (
                business_id,
                address,
                latitude,
                longitude
            )
            VALUES ($1, $2, $3, $4);
            `,
            [
                business.business_id,
                address,
                latitude,
                longitude
            ]
        );

        await client.query("COMMIT");

        return business;

    } catch (error) {

        await client.query("ROLLBACK");

        throw error;

    } finally {

        client.release();

    }

}
}

module.exports = Business;