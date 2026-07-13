import { Filter } from "../components/filter.js";

export function TouristView() {

    return `

        <section class="tourist-dashboard">

            <header class="dashboard-header">

                <h1>🌴 El Propio Travel</h1>

                <p>
                

¡Descubre Barranquilla como un verdadero quillero!

Encuentra restaurantes, planes, playas,
vida nocturna y experiencias únicas.
                </p>

            </header>

            ${Filter()}

            <div class="tourist-content">

                <div id="map"></div>

                <div id="promotionsContainer"></div>

            </div>

        </section>

    `;

}