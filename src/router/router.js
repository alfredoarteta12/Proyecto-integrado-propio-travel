import { loadHome } from "../views/homeView.js";
import { LoginView } from "../views/loginView.js";
import { TouristView } from "../views/touristView.js";
import { BusinessView } from "../views/businessView.js";
import { loadTouristView } from "../controller/tourist.controller.js";
import { loadBusinessView } from "../controller/business.controller.js";
import { RegisterView } from "../views/registerView.js";
import { loadRegister,loadLogin } from "../controller/auth.controller.js";


const app = document.getElementById("app");

export function navigate(view) {

    switch (view) {

       case "home":
    loadHome();
    break;

    case "login":
    loadLogin();
    break;

   case "register":
    loadRegister();
    break;

    case "tourist":
    loadTouristView();
    break;
        case "business":
    loadBusinessView();
    break;

        default:
            loadHome();
    }

}