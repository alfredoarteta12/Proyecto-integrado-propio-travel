export function PlaceCard(promotion) {

    return `

        <article class="place-card" data-id="${promotion.id}">
                        <img
                    src="${promotion.image}"
                    alt="${promotion.title}"
                    class="card-image"
                />

            <div class="card-header">

                <h3>${promotion.title}</h3>

                <span class="price">
                    $${promotion.price.toLocaleString("es-CO")}
                </span>

            </div>

            <p class="card-description">
                ${promotion.description}
            </p>

            <div class="card-info">

                <span class="badge schedule">
                    🕒 ${translateSchedule(promotion.schedule)}
                </span>

                <span class="badge audience">
                    👥 ${translateAudience(promotion.audience)}
                </span>

            </div>

            <div class="card-footer">

                <a href="${promotion.whatsapp}" target="_blank">

                    Reservar por WhatsApp

                </a>

            </div>

        </article>

    `;

}

function translateSchedule(schedule){

    switch(schedule){

        case "morning":
            return "Mañana";

        case "night":
            return "Noche";

        default:
            return schedule;

    }

}

function translateAudience(audience){

    switch(audience){

        case "family":
            return "Familiar";

        case "adults":
            return "Adultos";

        default:
            return audience;

    }

}