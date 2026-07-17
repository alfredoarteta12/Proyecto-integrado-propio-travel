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

// Actualizar promoción
export async function updatePromotion(id, promotion) {

    return await request(`${API.PROMOTIONS}/${id}`, {

        method: "PUT",

        body: JSON.stringify(promotion)

    });

}

// Eliminar promoción
export async function deletePromotion(id) {

    return await request(`${API.PROMOTIONS}/${id}`, {

        method: "DELETE"

    });

}