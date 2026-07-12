let map;
let currentMarker;

export function initializeMap() {

    if (map) return;

    map = L.map("map").setView([10.9685, -74.7813], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {

        attribution: "&copy; OpenStreetMap contributors"

    }).addTo(map);

}

export function showLocation(promotion) {

    if (!map) return;

    map.setView(
        [promotion.coordinates.lat, promotion.coordinates.lng],
        17
    );

    if (currentMarker) {

        map.removeLayer(currentMarker);

    }

    currentMarker = L.marker([
        promotion.coordinates.lat,
        promotion.coordinates.lng
    ])
        .addTo(map)
        .bindPopup(`
            <strong>${promotion.businessName}</strong><br>
            ${promotion.title}<br>
            $${promotion.price.toLocaleString("es-CO")}
        `)
        .openPopup();

}