import { Navbar } from "../components/navbar.js";
import { Hero } from "../components/hero.js";
import { Footer } from "../components/footer.js";

export function loadHome() {

    const app = document.getElementById("app");

    app.innerHTML = `
        ${Navbar()}

        ${Hero()}

        <main class="container">

            <h2>Descubre los mejores planes turísticos</h2>

            <p>Muy pronto podrás filtrar planes, explorar el mapa y reservar experiencias.</p>

        </main>

        ${Footer()}
    `;
}