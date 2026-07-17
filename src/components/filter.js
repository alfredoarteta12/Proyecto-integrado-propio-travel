export function Filter() {

    return `

        <section class="filters">

            <div class="filter-group">

                <label for="scheduleFilter">Horario</label>

                <select id="scheduleFilter">

                    <option value="all">Todos</option>
                   

                </select>

            </div>

            <div class="filter-group">

                <label for="audienceFilter">Público</label>

                <select id="audienceFilter">

                    <option value="todos">Todos</option>
                   

                </select>

            </div>

        </section>

    `;

}