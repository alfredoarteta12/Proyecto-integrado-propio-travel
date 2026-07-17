import { HeroSlider } from "../components/HeroSlider.js";
import { Filter } from "../components/filter.js";
import { Navbar } from "../components/navbar.js";
import { Footer } from "../components/footer.js";

export function TouristView() {

    return `

        ${Navbar()}

        <section class="tourist-dashboard">

            ${HeroSlider()}

            ${Filter()}

            <div class="tourist-content">

                <div class="map-section">

                    <h2>🗺️ Explora el mapa</h2>

                    <div id="map"></div>

                </div>

                <div class="cards-section">

                    <h2>🌴 Planes recomendados</h2>

                    <div id="promotionsContainer"></div>

                </div>

            </div>

        </section>

        ${Footer()}

    `;

}