export function Filter() {

    return `

        <section class="filters">

            <div class="filter-group">

                <label for="scheduleFilter">Horario</label>

                <select id="scheduleFilter">

                    <option value="all">Todos</option>
                    <option value="morning">Mañana</option>
                    <option value="night">Noche</option>

                </select>

            </div>

            <div class="filter-group">

                <label for="audienceFilter">Público</label>

                <select id="audienceFilter">

                    <option value="all">Todos</option>
                    <option value="family">Familiar</option>
                    <option value="adults">Adultos</option>

                </select>

            </div>

        </section>

    `;

}