const pool = require("../config/db");

class GroupType {

    static async getGroupTypes() {

        const query = `
            SELECT *
            FROM group_type
            ORDER BY group_name;
        `;

        const result = await pool.query(query);

        return result.rows;
    }

}

module.exports = GroupType;