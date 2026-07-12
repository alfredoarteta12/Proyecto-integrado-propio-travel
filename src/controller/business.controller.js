import { BusinessView } from "../views/businessView.js";
import { getBusinesses } from "../services/business.service.js";
import { PlaceCard } from "../components/placecard.js";

export async function loadBusinessView() {

    const app = document.getElementById("app");

    app.innerHTML = BusinessView();

    const businesses = await getBusinesses();

    const container = document.getElementById("businessContent");

    container.innerHTML = "";

    businesses.forEach((business) => {

        container.innerHTML += PlaceCard({

            title: business.name,

            description: business.category,

            price: 0,

            whatsapp: "#"

        });

    });

}