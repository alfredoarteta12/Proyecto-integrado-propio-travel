import { TouristView } from "../views/touristView.js";
import { getPromotions } from "../services/tourist.service.js";
import { PlaceCard } from "../components/placecard.js";

export async function loadTouristView() {

    const app = document.getElementById("app");

    app.innerHTML = TouristView();

    const promotions = await getPromotions();

    const container = document.getElementById("touristPlans");

    container.innerHTML = "";

    promotions.forEach((promotion) => {

        container.innerHTML += PlaceCard(promotion);

    });

}