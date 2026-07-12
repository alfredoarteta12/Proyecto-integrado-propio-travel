export function PlaceCard(promotion) {

    return `

        <article class="place-card">

            <h3>${promotion.title}</h3>

            <p>${promotion.description}</p>

            <strong>$${promotion.price.toLocaleString("es-CO")}</strong>

            <br><br>

            <a href="${promotion.whatsapp}" target="_blank">

                Reservar

            </a>

        </article>

    `;

}