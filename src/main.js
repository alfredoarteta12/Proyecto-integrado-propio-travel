import { navigate } from "./router/router.js";

document.addEventListener("click", (event) => {

    const link = event.target.closest("[data-view]");

    if (!link) return;

    event.preventDefault();

    navigate(link.dataset.view);

});

document.addEventListener("DOMContentLoaded", () => {

    navigate("tourist");

});
