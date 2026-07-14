let promotions = [

    {

        id: 1,

        title: "Tour por el Malecón",

        description: "Disfruta de un recorrido por el Gran Malecón del Río.",

        price: 45000,

        schedule: "Mañana",

        audience: "Familiar",

        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800"

    }

];
export function getPromotions() {

    return promotions;

}
/**
 * Obtener una promoción por su id
 */
export function getPromotionById(id) {

    return promotions.find(

        promotion => promotion.id === id

    );

}

/**
 * Agregar una nueva promoción
 */
export function addPromotion(promotion) {

    promotions.push(promotion);

}

/**
 * Eliminar una promoción
 */
export function deletePromotion(id) {

    promotions = promotions.filter(

        promotion => promotion.id !== id

    );

}

/**
 * Actualizar una promoción
 */
export function updatePromotion(updatedPromotion) {

    promotions = promotions.map(promotion =>

        promotion.id === updatedPromotion.id

            ? updatedPromotion

            : promotion

    );

}