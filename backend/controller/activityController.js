const Activity = require("../models/Activity");

const getActivities = async (req, res) => {

    try {

        const activities = await Activity.getActivities();

        res.status(200).json({
            success: true,
            data: activities
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Error al obtener las actividades."
        });

    }

};

module.exports = {
    getActivities
};