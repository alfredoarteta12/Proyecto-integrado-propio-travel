let users = [];

let currentUser = null;

/**
 * Registrar un nuevo negocio
 */
export function register(user) {

    users.push(user);

}

/**
 * Obtener todos los usuarios registrados
 */
export function getUsers() {

    return users;

}

/**
 * Buscar un usuario por correo
 */
export function getUserByEmail(email) {

    return users.find(

        user => user.email === email

    );

}

/**
 * Iniciar sesión
 */
export async function login(email, password) {

    const user = users.find(

        user =>

            user.email === email &&
            user.password === password

    );

    if (user) {

        currentUser = user;

    }

    return {

        success: !!user,

        user

    };

}

/**
 * Obtener el usuario autenticado
 */
export function getCurrentUser() {

    return currentUser;

}

/**
 * Cerrar sesión
 */
export function logout() {

    currentUser = null;

}