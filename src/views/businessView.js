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

                    <span>3</span>

                </div>

                <div class="stat-card">

                    <h3>Reservas</h3>

                    <span>12</span>

                </div>

                <div class="stat-card">

                    <h3>Visitas</h3>

                    <span>120</span>

                </div>

            </div>

            <div class="business-content">

                <section class="promotion-form">

                    <h2>Nueva promoción</h2>

                    <form id="promotionForm">

                        <input
                            type="text"
                            placeholder="Título de la promoción"
                            required
                        >

                        <textarea
                            placeholder="Descripción de la promoción"
                            rows="4"
                            required
                        ></textarea>

                        <input
                            type="number"
                            placeholder="Precio"
                            required
                        >

                        <div class="form-row">

                            <select required>

                                <option value="">Horario</option>

                                <option>Mañana</option>

                                <option>Tarde</option>

                                <option>Noche</option>

                            </select>

                            <select required>

                                <option value="">Público objetivo</option>

                                <option>Familiar</option>

                                <option>Parejas</option>

                                <option>Amigos</option>

                            </select>

                        </div>

                        <input
                            type="text"
                            placeholder="URL de la imagen"
                        >

                        <button
                            type="button"
                            class="location-btn"
                        >

                            📍 Seleccionar ubicación

                        </button>

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

                        <!-- Aquí se mostrarán las promociones -->

                    </div>

                </section>

            </div>

        </section>

        ${Footer()}

    `;

}