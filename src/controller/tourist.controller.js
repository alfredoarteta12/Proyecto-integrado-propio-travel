import { TouristView } from "../views/touristView.js";
import { getPromotions } from "../services/tourist.service.js";
import { PlaceCard } from "../components/placecard.js";
import { initializeMap, showLocation } from "../components/map.js";
import { HeroSlider, initializeHeroSlider } from "../components/HeroSlider.js";

export async function loadTouristView() {

    const app = document.getElementById("app");

   app.innerHTML = TouristView();

initializeHeroSlider();

setTimeout(() => {

    initializeMap();

}, 50);
    const scheduleFilter = document.getElementById("scheduleFilter");
    const audienceFilter = document.getElementById("audienceFilter");

scheduleFilter.addEventListener("change", updateFilters);
audienceFilter.addEventListener("change", updateFilters);

    const promotions = await getPromotions();

    const container = document.getElementById("promotionsContainer");

   refreshView(promotions, container);
   setupFilters(promotions, container);

}

function renderPromotions(promotions, container) {

    container.innerHTML = "";

    promotions.forEach((promotion) => {

        container.innerHTML += PlaceCard(promotion);

    });

} 
function refreshView(promotions, container) {

    if (promotions.length === 0) {

        container.innerHTML = `

            <div class="empty-state">

                <h3>🌴 No encontramos planes disponibles</h3>

                <p>Intenta cambiar los filtros para descubrir más experiencias en Barranquilla.</p>

            </div>

        `;

        return;

    }

    renderPromotions(promotions, container);

    setupCardEvents(promotions);

}
function setupCardEvents(promotions) {

    const cards = document.querySelectorAll(".place-card");

    cards.forEach((card) => {

        card.addEventListener("click", () => {

            const id = Number(card.dataset.id);

            const promotion = promotions.find(p => p.id === id);

            if (promotion) {
                showLocation(promotion);
            }

        });

    });

}
function setupFilters(promotions, container) {

    const scheduleFilter = document.getElementById("scheduleFilter");
    const audienceFilter = document.getElementById("audienceFilter");

    function updateFilters() {

       const filteredPromotions = applyFilters(promotions);

refreshView(filteredPromotions, container);

    }

    scheduleFilter.addEventListener("change", updateFilters);

    audienceFilter.addEventListener("change", updateFilters);

}

function applyFilters(promotions) {

    const schedule = document.getElementById("scheduleFilter").value;
    const audience = document.getElementById("audienceFilter").value;

    return promotions.filter((promotion) => {

        const scheduleMatch =
            schedule === "all" ||
            promotion.schedule === schedule;

        const audienceMatch =
            audience === "all" ||
            promotion.audience === audience;

        return scheduleMatch && audienceMatch;

    });

}

function updateFilters() {

    console.log("Filtro cambiado");

}