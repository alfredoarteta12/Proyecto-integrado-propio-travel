import { BusinessView } from "../views/businessView.js";
import { Plancard } from "../components/plancard.js";
import {getPromotions,getPromotionById,addPromotion,updatePromotion,deletePromotion} from "../services/promotion.service.js";
import { logout } from "../services/auth.service.js";
import { navigate } from "../router/router.js";

export function loadBusinessView() {

    const app = document.getElementById("app");

    app.innerHTML = BusinessView();

    // Indica si estamos editando una promoción
    let editingPromotionId = null;

    function renderPromotions() {

        const container = document.getElementById("businessPromotionsContainer");

        container.innerHTML = "";

        const promotions = getPromotions();

        promotions.forEach((promotion) => {

            container.innerHTML += Plancard(promotion);

        });

    }

    renderPromotions();

    const container = document.getElementById("businessPromotionsContainer");

    const form = document.getElementById("promotionForm");
    const logoutButton = document.querySelector(".logout-btn");

logoutButton.addEventListener("click", () => {

    logout();

    navigate("login");

});

    container.addEventListener("click", (event) => {

        // Eliminar
        if (event.target.classList.contains("delete-btn")) {

            const id = Number(event.target.dataset.id);

            deletePromotion(id);

            renderPromotions();

            return;

        }

        // Editar
        if (event.target.classList.contains("edit-btn")) {

            const id = Number(event.target.dataset.id);

            // Guardamos el id para saber que estamos editando
            editingPromotionId = id;

            const promotion = getPromotionById(id);

            const inputs = form.elements;

            inputs[0].value = promotion.title;
            inputs[1].value = promotion.description;
            inputs[2].value = promotion.price;
            inputs[3].value = promotion.schedule;
            inputs[4].value = promotion.audience;
            inputs[5].value = promotion.image;

        }

    });

    form.addEventListener("submit", (event) => {

        event.preventDefault();

        const inputs = form.elements;

        const promotion = {

            id: Date.now(),

            title: inputs[0].value,

            description: inputs[1].value,

            price: Number(inputs[2].value),

            schedule: inputs[3].value,

            audience: inputs[4].value,

            image: inputs[5].value

        };

        // Si estamos editando
        if (editingPromotionId !== null) {

            promotion.id = editingPromotionId;

            updatePromotion(promotion);

            editingPromotionId = null;

        } else {

            addPromotion(promotion);

        }

        renderPromotions();

        form.reset();

    });

}