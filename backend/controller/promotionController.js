const Promotion = require("../models/Promotion");

// Crear promoción
const createPromotion = async (req, res) => {

    try {

        const promotion = await Promotion.createPromotion(req.body);

        res.status(201).json({
            success: true,
            message: "Promoción creada correctamente.",
            data: promotion
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Error al crear la promoción."
        });

    }

};

// Obtener todas las promociones (Turista)
const getPromotions = async (req, res) => {

    try {

        const promotions = await Promotion.getPromotions();

        res.status(200).json({
            success: true,
            data: promotions
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Error al obtener las promociones."
        });

    }

};

// Obtener promociones de un negocio (Dashboard)
const getBusinessPromotions = async (req, res) => {

    try {

        const { id } = req.params;

        const promotions = await Promotion.getPromotionsByBusiness(id);

        res.status(200).json({
            success: true,
            data: promotions
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Error al obtener las promociones del negocio."
        });

    }

};

// Actualizar promoción
const updatePromotion = async (req, res) => {

    try {

        const { id } = req.params;

        const promotion = await Promotion.updatePromotion(id, req.body);

        if (!promotion) {

            return res.status(404).json({
                success: false,
                message: "Promoción no encontrada."
            });

        }

        res.status(200).json({
            success: true,
            message: "Promoción actualizada correctamente.",
            data: promotion
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Error al actualizar la promoción."
        });

    }

};

// Eliminar promoción
const deletePromotion = async (req, res) => {

    try {

        const { id } = req.params;

        const promotion = await Promotion.deletePromotion(id);

        if (!promotion) {

            return res.status(404).json({
                success: false,
                message: "Promoción no encontrada."
            });

        }

        res.status(200).json({
            success: true,
            message: "Promoción eliminada correctamente."
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Error al eliminar la promoción."
        });

    }

};

module.exports = {
    createPromotion,
    getPromotions,
    getBusinessPromotions,
    updatePromotion,
    deletePromotion
};