const pool = require("../config/db");

class Location {

    static async getLocations() {

        const query = `
            SELECT *
            FROM location
            ORDER BY address;
        `;

        const result = await pool.query(query);

        return result.rows;
    }

}

module.exports = Location;