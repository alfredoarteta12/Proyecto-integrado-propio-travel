import { BusinessView } from "../views/businessView.js";
import { Plancard } from "../components/plancard.js";

import {
    getActivities,
    getJourneys,
    getGroupTypes
} from "../services/business.service.js";

import {
    getBusinessPromotions,
    createPromotion
} from "../services/promotion.service.js";

import { navigate } from "../router/router.js";

export async function loadBusinessView() {

    const app = document.getElementById("app");

    app.innerHTML = BusinessView();

    const logoutButton = document.querySelector(".logout-btn");

    logoutButton.addEventListener("click", () => {

        localStorage.removeItem("business");

        navigate("login");

    });

    await renderPromotions();

    await loadSelects();

    loadForm();

}

async function renderPromotions() {

    const container = document.getElementById(
        "businessPromotionsContainer"
    );

    container.innerHTML = "";

    try {

        const business = JSON.parse(
    localStorage.getItem("business")
);

const response = await getBusinessPromotions(
    business.business_id
);

        if (!response.success) {

            container.innerHTML =
                "<p>No se pudieron cargar las promociones.</p>";

            return;

        }

        response.data.forEach((promotion) => {

            container.innerHTML += Plancard(promotion);

        });

        document.getElementById("promotionCount").textContent =
            response.data.length;

    } catch (error) {

        console.error(error);

        container.innerHTML =
            "<p>Error al conectar con el servidor.</p>";

    }

}

async function loadSelects() {

    const activitySelect = document.getElementById("activitySelect");
    const journeySelect = document.getElementById("journeySelect");
    const groupTypeSelect = document.getElementById("groupTypeSelect");

    const activities = await getActivities();
    const journeys = await getJourneys();
    const groupTypes = await getGroupTypes();

    activities.data.forEach((activity) => {

        activitySelect.innerHTML += `
            <option value="${activity.activity_id}">
                ${activity.activity_name}
            </option>
        `;

    });

    journeys.data.forEach((journey) => {

        journeySelect.innerHTML += `
            <option value="${journey.journey_id}">
                ${journey.journey_name}
            </option>
        `;

    });

    groupTypes.data.forEach((group) => {

        groupTypeSelect.innerHTML += `
            <option value="${group.group_type_id}">
                ${group.group_name}
            </option>
        `;

    });

}

function loadForm() {

    const form = document.getElementById("promotionForm");

    form.addEventListener("submit", async (event) => {

        event.preventDefault();

        const business = JSON.parse(
            localStorage.getItem("business")
        );

        const promotion = {

            business_id: business.business_id,

            title: document.getElementById("title").value.trim(),

            description: document.getElementById("description").value.trim(),

            price: Number(
                document.getElementById("price").value
            ),

            activity_id: Number(
                document.getElementById("activitySelect").value
            ),

            journey_id: Number(
                document.getElementById("journeySelect").value
            ),

            group_type_id: Number(
                document.getElementById("groupTypeSelect").value
            ),

            image: document.getElementById("image").value.trim()

        };

        try {

            const response = await createPromotion(promotion);

            if (response.success) {

                alert("Promoción creada correctamente.");

                form.reset();

                await renderPromotions();

            } else {

                alert(response.message);

            }

        } catch (error) {

            console.error(error);

            alert("Error al crear la promoción.");

        }

    });

}