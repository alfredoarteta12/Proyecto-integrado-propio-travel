import { loadHome } from "../views/homeView.js";
import { LoginView } from "../views/loginView.js";
import { TouristView } from "../views/touristView.js";
import { BusinessView } from "../views/businessView.js";

const app = document.getElementById("app");

export function navigate(view) {

    switch (view) {

        case "home":
            loadHome();
            break;

        case "login":
            app.innerHTML = LoginView();
            break;

        case "tourist":
            app.innerHTML = TouristView();
            break;

        case "business":
            app.innerHTML = BusinessView();
            break;

        default:
            loadHome();
    }

}