const pool = require("../config/db");

class Journey {

    static async getJourneys() {

        const query = `
            SELECT *
            FROM journey
            ORDER BY journey_name;
        `;

        const result = await pool.query(query);

        return result.rows;
    }

}

module.exports = Journey;