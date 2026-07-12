// Simulación temporal de los datos.
// Cuando el backend esté listo, estos datos vendrán desde Express.

const promotions = [
    {
        id: 1,
        businessName: "Gran Malecón - El Caimán del Río",
        title: "Desayuno Costeño Tradicional + Bici",
        description: "Incluye arepa de huevo con carne desmechada, jugo de corozo y 1 hora de bicicleta.",
        price: 28000,
        schedule: "morning",
        audience: "family",
        coordinates: {
            lat: 11.0215,
            lng: -74.7962
        },
        whatsapp: "https://wa.me"
    },

    {
        id: 2 ,
        businessName: "La Troja",
        title: "Combo Rumbero: Entrada + 3 Cervezas",
        description: "Goza de la salsa icónica de Barranquilla con mesa reservada y picada tradicional.",
        price: 50000,
        schedule: "night",
        audience: "adults",
        coordinates: {
            lat: 10.9991,
            lng: -74.8021
        },
        whatsapp: "https://wa.me"
    },

    {
        id: "promo_03",
        businessName: "Cucayo Luna del Río",
        title: "Combo Quillero",
        description: "Picada de butifarra y chorizo con bollo de yuca.",
        price: 50000,
        schedule: "morning",
        audience: "family",
        coordinates: {
            lat: 11.0127,
            lng: -74.7856
        },
        whatsapp: "https://wa.me"
    }
];

export async function getPromotions() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve(promotions);

        }, 300);

    });

}