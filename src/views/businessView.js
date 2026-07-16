import { Navbar } from "../components/navbar.js";
import { Footer } from "../components/footer.js";

export function BusinessView() {

    return `

        ${Navbar()}

        <section class="business-dashboard container">

            <div class="business-header">

                <div>

                    <h1>Panel de Negocios</h1>

                    <p>Administra tus promociones turísticas desde un solo lugar.</p>

                </div>

                <button class="logout-btn">

                    Cerrar sesión

                </button>

            </div>

            <div class="business-stats">

                <div class="stat-card">

                    <h3>Promociones</h3>

                    <span id="promotionCount">0</span>

                </div>

                <div class="stat-card">

                    <h3>Reservas</h3>

                    <span>0</span>

                </div>

                <div class="stat-card">

                    <h3>Visitas</h3>

                    <span>0</span>

                </div>

            </div>

            <div class="business-content">

                <section class="promotion-form">

                    <h2>Nueva promoción</h2>

                    <form id="promotionForm">

                        <input
                            id="title"
                            type="text"
                            placeholder="Título de la promoción"
                            required
                        >

                        <textarea
                            id="description"
                            placeholder="Descripción de la promoción"
                            rows="4"
                            required
                        ></textarea>

                        <input
                            id="price"
                            type="number"
                            placeholder="Precio"
                            required
                        >

                        <select id="activitySelect" required>

                            <option value="">
                                Seleccione una actividad
                            </option>

                        </select>

                        <div class="form-row">

                            <select id="journeySelect" required>

                                <option value="">
                                    Seleccione una jornada
                                </option>

                            </select>

                            <select id="groupTypeSelect" required>

                                <option value="">
                                    Seleccione un tipo de grupo
                                </option>

                            </select>

                        </div>

                        <input
                            id="image"
                            type="text"
                            placeholder="URL de la imagen"
                            required
                        >

                        <button
                            type="submit"
                            class="save-btn"
                        >

                            Guardar promoción

                        </button>

                    </form>

                </section>

                <section class="business-promotions">

                    <div class="promotion-header">

                        <h2>Mis promociones</h2>

                    </div>

                    <div
                        class="promotion-list"
                        id="businessPromotionsContainer"
                    >

                    </div>

                </section>

            </div>

        </section>

        ${Footer()}

    `;

}