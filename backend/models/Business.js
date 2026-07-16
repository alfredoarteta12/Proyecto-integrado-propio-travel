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
    static async createBusiness(data) {

        const {
            business_name,
            email,
            phone,
            password
        } = data;

        const query = `
            INSERT INTO business (
                business_name,
                email,
                phone,
                password
            )
            VALUES ($1, $2, $3, $4)
            RETURNING *;
        `;

        const values = [
            business_name,
            email,
            phone,
            password
        ];

        const result = await pool.query(query, values);

        return result.rows[0];
    }

}

module.exports = Business;