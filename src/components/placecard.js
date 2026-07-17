export function PlaceCard(promotion) {

    return `

        <article class="place-card" data-id="${promotion.promotion_id}">

            <img
                src="${promotion.image}"
                alt="${promotion.title}"
                class="card-image"
            />

            <div class="card-header">

                <h3>${promotion.title}</h3>

                <span class="price">
                    $${Number(promotion.price).toLocaleString("es-CO")}
                </span>

            </div>

            <p class="card-description">
                ${promotion.description}
            </p>

            <div class="card-info">

                <span class="badge schedule">
                    🕒 ${promotion.journey_name}
                </span>

                <span class="badge audience">
                    👥 ${promotion.group_name}
                </span>

            </div>

            <div class="card-footer">

                <a href="${promotion.whatsapp || "#"}" target="_blank">

                    Reservar por WhatsApp

                </a>

            </div>

        </article>

    `;

}