import { Navbar } from "../components/navbar.js";
import { Footer } from "../components/footer.js";

export function loadHome() {

    const app = document.getElementById("app");

    app.innerHTML = `

        ${Navbar()}

        <main class="about-page">

            <h1>🌴 Sobre El Propio Travel</h1>

            <p>
                El Propio Travel es una plataforma diseñada para promover el turismo
                en Barranquilla y el Atlántico, conectando turistas con restaurantes,
                playas, eventos y experiencias únicas de la región.
            </p>

            <h2>Nuestra misión</h2>

            <p>
                Facilitar el acceso a planes turísticos y apoyar el crecimiento de los
                negocios locales mediante una plataforma moderna, intuitiva y accesible.
            </p>

            <h2>Contáctanos</h2>

            <p><strong>📍 Ciudad:</strong> Barranquilla, Colombia</p>

            <p><strong>📧 Correo:</strong> contacto@elpropiotravel.com</p>

            <p><strong>📱 WhatsApp:</strong> +57 300 000 0000</p>

        </main>

        ${Footer()}

    `;
}