const Location = require("../models/Location");

const getLocations = async (req, res) => {

    try {

        const locations = await Location.getLocations();

        res.status(200).json({
            success: true,
            data: locations
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Error al obtener las ubicaciones."
        });

    }

};

module.exports = {
    getLocations
};