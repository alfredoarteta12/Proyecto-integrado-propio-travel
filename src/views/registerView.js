import { Navbar } from "../components/navbar.js";
import { Footer } from "../components/footer.js";

export function RegisterView() {

    return `

        ${Navbar()}

        <main class="login-page">

            <section class="login-container">

                <div class="login-banner">

                    <div class="login-overlay">

                        <h2>🌴 El Propio Travel</h2>

                        <p>
                            Registra tu negocio y comienza a promocionar tus
                            planes turísticos a miles de visitantes.
                        </p>

                    </div>

                </div>

                <div class="login-card">

                    <h2>Registrar negocio</h2>

                    <p>Crea una cuenta para administrar tus promociones.</p>

                    <form id="registerForm">

                        <input
                            type="text"
                            placeholder="Nombre del negocio"
                            required
                        >

                        <input
                            type="email"
                            placeholder="Correo electrónico"
                            required
                        >
                        <input
                            type="tel"
                            placeholder="Número de WhatsApp"
                            required
                            pattern="[0-9]{10}"
                            maxlength="10"
                            minlength="10"
                            title="Ingresa un número de WhatsApp de 10 dígitos."
                        >
                        <input
                            id="address"
                            type="text"
                            placeholder="Dirección del negocio (Ej. Calle 84 #51B-20, Barranquilla)"
                            required
                        >

                        <input
                            type="password"
                            placeholder="Contraseña"
                            required
                        >

                        <input
                            type="password"
                            placeholder="Confirmar contraseña"
                            required
                        >

                        <button type="submit">

                            Crear cuenta

                        </button>

                    </form>

                    <div class="register-link">

                        <p>

                            ¿Ya tienes una cuenta?

                            <a href="#" data-view="login">

                                Inicia sesión

                            </a>

                        </p>

                    </div>

                </div>

            </section>

        </main>

        ${Footer()}

    `;

}