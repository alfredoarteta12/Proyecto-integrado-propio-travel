import { API } from "../api/endpoints.js";
import { request } from "../api/http.js";

// Obtener todas las promociones (Turistas)
export async function getPromotions() {

    return await request(API.PROMOTIONS);

}

// Obtener promociones de un negocio (Dashboard)
export async function getBusinessPromotions(businessId) {

    return await request(
        `${API.PROMOTIONS}/business/${businessId}`
    );

}

// Crear promoción
export async function createPromotion(promotion) {

    return await request(API.PROMOTIONS, {

        method: "POST",

        body: JSON.stringify(promotion)

    });

}