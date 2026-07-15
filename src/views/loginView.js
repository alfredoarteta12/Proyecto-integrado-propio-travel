import { Navbar } from "../components/navbar.js";
import { Footer } from "../components/footer.js";

export function LoginView() {

    return `

        ${Navbar()}

        <main class="login-page">

            <section class="login-container">

                <div class="login-banner">

                    <div class="login-overlay">

                        <h2>🌴 El Propio Travel</h2>

                        <p>
                            Administra tus promociones y conecta tu negocio
                            con miles de turistas que visitan Barranquilla.
                        </p>

                    </div>

                </div>

                <div class="login-card">

                    <h2>Iniciar sesión</h2>

                    <p>Bienvenido nuevamente.</p>

                    <form id="loginForm">

                        <input
                            type="email"
                            id="email"
                            placeholder="Correo electrónico"
                            required
                        >

                        <div class="password-container">

                            <input
                                type="password"
                                id="password"
                                placeholder="Contraseña"
                                required
                            >

                            <span id="togglePassword">👁</span>

                        </div>

                        <button type="submit">

                            Iniciar sesión

                        </button>

                    </form>
                    
        <div class="register-link">

            <p>

                ¿No tienes una cuenta?

                <a href="#" data-view="register">

                    Regístrate aquí

                </a>

            </p>

                        </div>

            </section>

        </main>

        ${Footer()}

    `;

}