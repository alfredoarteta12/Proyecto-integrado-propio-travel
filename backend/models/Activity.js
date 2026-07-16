const pool = require("../config/db");

class Activity {

    static async getActivities() {

        const query = `
            SELECT *
            FROM activity
            ORDER BY activity_name;
        `;

        const result = await pool.query(query);

        return result.rows;
    }

}

module.exports = Activity;