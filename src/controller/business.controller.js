import { BusinessView } from "../views/businessView.js";
import { Plancard } from "../components/plancard.js";

import {
    getActivities,
    getJourneys,
    getGroupTypes
} from "../services/business.service.js";

import {
    getBusinessPromotions,
    createPromotion,
    updatePromotion,
    deletePromotion
} from "../services/promotion.service.js";
import { navigate } from "../router/router.js";

let editingPromotionId = null;

export async function loadBusinessView() {

    const app = document.getElementById("app");

    app.innerHTML = BusinessView();
    const business = JSON.parse(localStorage.getItem("business"));

const hour = new Date().getHours();

let greeting = "";

if (hour < 12) {

    greeting = "¡Buenos días";

} else if (hour < 18) {

    greeting = "¡Buenas tardes";

} else {

    greeting = "¡Buenas noches";

}

document.getElementById("greeting").textContent =
`${greeting}, ${business.business_name}! 👋`;

    const logoutButton = document.querySelector(".logout-btn");

    logoutButton.addEventListener("click", () => {

        localStorage.removeItem("business");

        navigate("login");

    });

    await renderPromotions();

    addCardEvents();

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

            let response;

            if (editingPromotionId) {

                response = await updatePromotion(
                    editingPromotionId,
                    promotion
                );

            } else {

                response = await createPromotion(
                    promotion
                );

            }

            if (response.success) {

                alert(
                    editingPromotionId
                        ? "Promoción actualizada correctamente."
                        : "Promoción creada correctamente."
                );

                form.reset();

                editingPromotionId = null;

                document.getElementById("formTitle").textContent =
                    "Nueva promoción";

                document.getElementById("submitButton").textContent =
                    "Guardar promoción";

                await renderPromotions();

                addCardEvents();

            } else {

                alert(response.message);

            }

        } catch (error) {

            console.error(error);

            alert("Error al guardar la promoción.");

        }

    });

}
function addCardEvents() {

    const editButtons =
        document.querySelectorAll(".edit-btn");

    const deleteButtons =
        document.querySelectorAll(".delete-btn");

    editButtons.forEach(button => {

    button.addEventListener("click", async () => {

        const id = Number(button.dataset.id);

        const business = JSON.parse(
            localStorage.getItem("business")
        );

        const response = await getBusinessPromotions(
            business.business_id
        );

        const promotion = response.data.find(
            p => p.promotion_id === id
        );

        if (!promotion) return;

        editingPromotionId = id;
        console.log("Entró a editar", id);

        document.getElementById("title").value =
            promotion.title;

        document.getElementById("description").value =
            promotion.description;

        document.getElementById("price").value =
            promotion.price;

        document.getElementById("activitySelect").value =
            promotion.activity_id;

        document.getElementById("journeySelect").value =
            promotion.journey_id;

        document.getElementById("groupTypeSelect").value =
            promotion.group_type_id;

        document.getElementById("image").value =
            promotion.image;

        document.getElementById("formTitle").textContent =
            "Editar promoción";

        document.getElementById("submitButton").textContent =
            "Actualizar promoción";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});

  deleteButtons.forEach(button => {

    button.addEventListener("click", async () => {

        const confirmDelete = confirm(
            "¿Deseas eliminar esta promoción?"
        );

        if (!confirmDelete) return;

        try {

            const response = await deletePromotion(
                button.dataset.id
            );

            alert(response.message);

            await renderPromotions();

            addCardEvents();

        } catch (error) {

            console.error(error);

            alert("No se pudo eliminar la promoción.");

        }

    });

});

}