import { API } from "../api/endpoints.js";
import { request } from "../api/http.js";

// Registrar negocio
export async function register(user) {

    return await request(`${API.AUTH}/register`, {

        method: "POST",

        body: JSON.stringify(user)

    });

}

// Iniciar sesión
export async function login(email, password) {

    return await request(`${API.AUTH}/login`, {

        method: "POST",

        body: JSON.stringify({

            email,
            password

        })

    });

}