

let map;
let currentMarker;

export function initializeMap() {

    if (map) {

        map.remove();

        map = null;

    }

    map = L.map("map").setView([10.9685, -74.7813], 13);

    L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            attribution: "&copy; OpenStreetMap contributors"
        }
    ).addTo(map);

}
export function showLocation(promotion) {

    if (!map) return;

    map.setView(
        [promotion.latitude, promotion.longitude],
        17
    );

    if (currentMarker) {
        map.removeLayer(currentMarker);
    }

    currentMarker = L.marker([
        promotion.latitude,
        promotion.longitude
    ])
        .addTo(map)
        .bindPopup(`
            <strong>${promotion.business_name}</strong><br>
            ${promotion.title}<br>
            $${promotion.price.toLocaleString("es-CO")}<br>
            ${promotion.address}
        `)
        .openPopup();

}