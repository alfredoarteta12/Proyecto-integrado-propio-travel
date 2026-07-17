const pool = require("../config/db");

class Promotion {

    // Crear promoción
    static async createPromotion(data) {

        const {
            business_id,
            activity_id,
            journey_id,
            group_type_id,
            title,
            description,
            price,
            image
        } = data;

        const query = `
            INSERT INTO promotion (
                business_id,
                activity_id,
                journey_id,
                group_type_id,
                title,
                description,
                price,
                image
            )
            VALUES (
                $1, $2, $3, $4, $5, $6, $7, $8
            )
            RETURNING *;
        `;

        const values = [
            business_id,
            activity_id,
            journey_id,
            group_type_id,
            title,
            description,
            price,
            image
        ];

        const result = await pool.query(query, values);

        return result.rows[0];

    }

    // Obtener todas las promociones (Página del turista)
    static async getPromotions() {

        const query = `
            SELECT
                p.promotion_id,
                p.title,
                p.description,
                p.price,
                p.image,
                p.status,
                p.created_at,

                b.business_name,
                b.phone,

                l.address,
                l.latitude,
                l.longitude,

                a.activity_name,

                j.journey_name,

                g.group_name

            FROM promotion p

            INNER JOIN business b
                ON p.business_id = b.business_id

            INNER JOIN location l
                ON b.business_id = l.business_id

            INNER JOIN activity a
                ON p.activity_id = a.activity_id

            INNER JOIN journey j
                ON p.journey_id = j.journey_id

            INNER JOIN group_type g
                ON p.group_type_id = g.group_type_id

            ORDER BY p.promotion_id DESC;
        `;

        const result = await pool.query(query);

        const promotions = result.rows.map((promotion) => ({
            ...promotion,
            whatsapp: `https://wa.me/57${promotion.phone}?text=${encodeURIComponent(
                `Hola, estoy interesado en la promoción "${promotion.title}" que vi en El Propio Travel.`
            )}`
        }));

        return promotions;

    }

    // Obtener promociones de un negocio (Dashboard)
    static async getPromotionsByBusiness(businessId) {

        const query = `
            SELECT
                p.promotion_id,
                p.title,
                p.description,
                p.price,
                p.image,
                p.status,
                p.created_at,

                b.business_name,
                b.phone,

                l.address,
                l.latitude,
                l.longitude,

                a.activity_name,

                j.journey_name,

                g.group_name

            FROM promotion p

            INNER JOIN business b
                ON p.business_id = b.business_id

            INNER JOIN location l
                ON b.business_id = l.business_id

            INNER JOIN activity a
                ON p.activity_id = a.activity_id

            INNER JOIN journey j
                ON p.journey_id = j.journey_id

            INNER JOIN group_type g
                ON p.group_type_id = g.group_type_id

            WHERE p.business_id = $1

            ORDER BY p.promotion_id DESC;
        `;

        const result = await pool.query(query, [businessId]);

        const promotions = result.rows.map((promotion) => ({
            ...promotion,
            whatsapp: `https://wa.me/57${promotion.phone}?text=${encodeURIComponent(
                `Hola, estoy interesado en la promoción "${promotion.title}" que vi en El Propio Travel.`
            )}`
        }));

        return promotions;

    }

    // Actualizar promoción
    static async updatePromotion(id, data) {

        const {
            activity_id,
            journey_id,
            group_type_id,
            title,
            description,
            price,
            image
        } = data;

        const query = `
            UPDATE promotion
            SET
                activity_id = $1,
                journey_id = $2,
                group_type_id = $3,
                title = $4,
                description = $5,
                price = $6,
                image = $7
            WHERE promotion_id = $8
            RETURNING *;
        `;

        const values = [
            activity_id,
            journey_id,
            group_type_id,
            title,
            description,
            price,
            image,
            id
        ];

        const result = await pool.query(query, values);

        return result.rows[0];

    }

    // Eliminar promoción
    static async deletePromotion(id) {

        const query = `
            DELETE FROM promotion
            WHERE promotion_id = $1
            RETURNING *;
        `;

        const result = await pool.query(query, [id]);

        return result.rows[0];

    }

}

module.exports = Promotion;