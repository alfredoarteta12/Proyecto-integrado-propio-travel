import { TouristView } from "../views/touristView.js";
import { getPromotions } from "../services/tourist.service.js";
import { PlaceCard } from "../components/placecard.js";
import { initializeMap, showLocation } from "../components/map.js";
import { initializeHeroSlider } from "../components/HeroSlider.js";
import {
    getJourneys,
    getGroupTypes
} from "../services/business.service.js";

export async function loadTouristView() {

    const app = document.getElementById("app");

    app.innerHTML = TouristView();

    initializeHeroSlider();

    await loadFilters();

    setTimeout(() => {
        initializeMap();
    }, 50);

    const response = await getPromotions();
    const promotions = response.data;
    console.log(promotions);

    const container = document.getElementById("promotionsContainer");

    refreshView(promotions, container);

    setupFilters(promotions, container);
}

async function loadFilters() {

    const scheduleFilter = document.getElementById("scheduleFilter");
    const audienceFilter = document.getElementById("audienceFilter");

    const journeys = await getJourneys();
    const groups = await getGroupTypes();

    scheduleFilter.innerHTML = `
        <option value="all">Todos</option>
    `;

    journeys.data.forEach((journey) => {

        scheduleFilter.innerHTML += `
            <option value="${journey.journey_name}">
                ${journey.journey_name}
            </option>
        `;

    });

    audienceFilter.innerHTML = `
        <option value="all">Todos</option>
    `;

    groups.data.forEach((group) => {

        audienceFilter.innerHTML += `
            <option value="${group.group_name}">
                ${group.group_name}
            </option>
        `;

    });

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

            const promotion = promotions.find(
                p => p.promotion_id === id
            );

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
            promotion.journey_name === schedule;

        const audienceMatch =
            audience === "all" ||
            promotion.group_name === audience;

        return scheduleMatch && audienceMatch;

    });

}