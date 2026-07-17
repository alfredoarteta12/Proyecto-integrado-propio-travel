export async function geocodeAddress(address) {

    const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(address)}`,
        {
            headers: {
                "Accept": "application/json"
            }
        }
    );

    if (!response.ok) {
        throw new Error("No fue posible consultar la ubicación.");
    }

    const data = await response.json();

    if (!data.length) {
        throw new Error("No se encontró la dirección.");
    }

    return {
        latitude: Number(data[0].lat),
        longitude: Number(data[0].lon)
    };

}