import { RegisterView } from "../views/registerView.js";
import { register, getUsers, getUserByEmail, login as loginUser } from "../services/auth.service.js";
import { navigate } from "../router/router.js";
import { LoginView } from "../views/loginView.js";

export function loadRegister() {

    const app = document.getElementById("app");

    app.innerHTML = RegisterView();

    const form = document.getElementById("registerForm");

    form.addEventListener("submit", (event) => {

        event.preventDefault();

        const inputs = form.elements;

        const user = {

            businessName: inputs[0].value.trim(),

            email: inputs[1].value.trim().toLowerCase(),

            phone: inputs[2].value.trim(),

            password: inputs[3].value,

            confirmPassword: inputs[4].value

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
        if (getUserByEmail(user.email)) {

            alert("Ya existe un negocio registrado con ese correo.");

            return;

        }
        if (user.businessName.length < 3) {

            alert("El nombre del negocio debe tener al menos 3 caracteres.");

            return;

        }
        const newUser = {

            businessName: user.businessName,

            email: user.email,

            phone: user.phone,

            password: user.password

        };

        register(newUser);

        alert("Cuenta creada correctamente.");

        navigate("login");
    });

}
export function loadLogin() {

    const app = document.getElementById("app");

    app.innerHTML = LoginView();

    const form = document.getElementById("loginForm");

    form.addEventListener("submit", async (event) => {

        event.preventDefault();

        const inputs = form.elements;

        const email = inputs[0].value;

        const password = inputs[1].value;

        const result = await loginUser(email, password);

        if (result.success) {

            navigate("business");

        } else {

            alert("Correo o contraseña incorrectos.");

        }

    });

}