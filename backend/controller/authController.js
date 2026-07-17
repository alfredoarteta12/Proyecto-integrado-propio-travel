const bcrypt = require("bcrypt");
const Business = require("../models/Business");

const register = async (req, res) => {

    try {

        const {
            business_name,
            email,
            phone,
            password,
            address,
            latitude,
            longitude
        } = req.body;

        // Validar correo
        const emailExists = await Business.findByEmail(email);

        if (emailExists) {
            return res.status(400).json({
                success: false,
                message: "El correo ya está registrado."
            });
        }

        // Validar teléfono
        const phoneExists = await Business.findByPhone(phone);

        if (phoneExists) {
            return res.status(400).json({
                success: false,
                message: "El teléfono ya está registrado."
            });
        }

        // Encriptar contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crear negocio
        const business = await Business.createBusiness({
            business_name,
            email,
            phone,
            password: hashedPassword,
            address,
            latitude,
            longitude
        });

        res.status(201).json({
            success: true,
            message: "Negocio registrado correctamente.",
            data: business
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Error interno del servidor."
        });

    }

};

const login = async (req, res) => {

    try {

        const { email, password } = req.body;

        const business = await Business.loginBusiness(email);

        if (!business) {
            return res.status(404).json({
                success: false,
                message: "Correo no encontrado."
            });
        }

        const match = await bcrypt.compare(password, business.password);

        if (!match) {
            return res.status(401).json({
                success: false,
                message: "Contraseña incorrecta."
            });
        }

        // No devolver la contraseña
        delete business.password;

        res.status(200).json({
            success: true,
            message: "Inicio de sesión exitoso.",
            data: business
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Error interno del servidor."
        });

    }

};

module.exports = {
    register,
    login
};