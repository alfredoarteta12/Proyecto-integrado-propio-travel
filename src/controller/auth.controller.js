import { geocodeAddress } from "../services/location.service.js";
import { RegisterView } from "../views/registerView.js";
import {
    register,
    login as loginUser
} from "../services/auth.service.js";
import { navigate } from "../router/router.js";
import { LoginView } from "../views/loginView.js";

export function loadRegister() {

    const app = document.getElementById("app");

    app.innerHTML = RegisterView();

    const form = document.getElementById("registerForm");

    form.addEventListener("submit", async (event) => {

        event.preventDefault();

        const inputs = form.elements;

        const user = {

            businessName: inputs[0].value.trim(),

            email: inputs[1].value.trim().toLowerCase(),

            phone: inputs[2].value.trim(),

            address: inputs[3].value.trim(),

            password: inputs[4].value,

            confirmPassword: inputs[5].value

        };

        if (user.password !== user.confirmPassword) {

            alert("Las contraseñas no coinciden.");

            return;

        }

        if (user.password.length < 8) {

            alert("La contraseña debe tener al menos 8 caracteres.");

            return;

        }

        if (!/^[0-9]{10}$/.test(user.phone)) {

            alert("El número de WhatsApp debe tener exactamente 10 dígitos.");

            return;

        }

        if (user.businessName.length < 3) {

            alert("El nombre del negocio debe tener al menos 3 caracteres.");

            return;

        }
        let location;

        try {

            location = await geocodeAddress(user.address);

        } catch (error) {

            alert("No se pudo encontrar esa dirección. Verifica que esté escrita correctamente.");

            return;

        }

        const result = await register({

            business_name: user.businessName,

            email: user.email,

            phone: user.phone,

            password: user.password,

            address: user.address,

            latitude: location.latitude,

            longitude: location.longitude

        });
        if (result.success) {

            alert(result.message);

            navigate("login");

        } else {

            alert(result.message);

        }

    });

}

export function loadLogin() {

    const app = document.getElementById("app");

    app.innerHTML = LoginView();

    const form = document.getElementById("loginForm");

    form.addEventListener("submit", async (event) => {

        event.preventDefault();

        const inputs = form.elements;

        const email = inputs[0].value.trim().toLowerCase();

        const password = inputs[1].value;

        const result = await loginUser(email, password);

        if (result.success) {

            // Guardar el negocio que inició sesión
            localStorage.setItem(
                "business",
                JSON.stringify(result.data)
            );

            alert(result.message);

            navigate("business");

        } else {

            alert(result.message);

        }

    });

}