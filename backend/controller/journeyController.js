const Journey = require("../models/Journey");

const getJourneys = async (req, res) => {

    try {

        const journeys = await Journey.getJourneys();

        res.status(200).json({
            success: true,
            data: journeys
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Error al obtener las jornadas."
        });

    }

};

module.exports = {
    getJourneys
};