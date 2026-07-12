import { TouristView } from "../views/touristView.js";
import { getPromotions } from "../services/tourist.service.js";
import { PlaceCard } from "../components/placecard.js";
import { initializeMap, showLocation } from "../components/map.js";



export async function loadTouristView() {

    const app = document.getElementById("app");

   
    app.innerHTML = TouristView();

    initializeMap();

const promotions = await getPromotions();

    

    const container = document.getElementById("promotionsContainer");

    container.innerHTML = "";

    promotions.forEach((promotion) => {

        container.innerHTML += PlaceCard(promotion);
        const cards = document.querySelectorAll(".place-card");

cards.forEach((card) => {

    card.addEventListener("click", () => {

        const id = card.dataset.id;

        const promotion = promotions.find(p => p.id == id);

        showLocation(promotion);

    });

});

    });

}