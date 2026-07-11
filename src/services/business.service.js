const businesses = [

    {
        id: 1,
        name: "La Troja",
        category: "Restaurant",
        location: "Barranquilla",
        phone: "3001234567"
    },

    {
        id: 2,
        name: "Gran Malecón",
        category: "Tourist Attraction",
        location: "Barranquilla",
        phone: "3009876543"
    }

];

export async function getBusinesses() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve(businesses);

        }, 300);

    });

}