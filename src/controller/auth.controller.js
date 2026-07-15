import { RegisterView } from "../views/registerView.js";
import {register,getUsers,login as loginUser} from "../services/auth.service.js";
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

    businessName: inputs[0].value,

    email: inputs[1].value,

    phone: inputs[2].value,

    password: inputs[3].value,

    confirmPassword: inputs[4].value

};

if (user.password !== user.confirmPassword) {

    alert("Las contraseñas no coinciden.");

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