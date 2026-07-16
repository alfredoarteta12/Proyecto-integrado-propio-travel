const GroupType = require("../models/GroupType");

const getGroupTypes = async (req, res) => {

    try {

        const groupTypes = await GroupType.getGroupTypes();

        res.status(200).json({
            success: true,
            data: groupTypes
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Error al obtener los tipos de grupo."
        });

    }

};

module.exports = {
    getGroupTypes
};