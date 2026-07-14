export function Plancard(promotion) {

    return `

        <article class="business-card">

            <img
                src="${promotion.image}"
                alt="${promotion.title}"
                class="business-card-image"
            >

            <div class="business-card-content">

                <h3>${promotion.title}</h3>

                <p>${promotion.description}</p>

                <span class="business-price">

                    $${promotion.price.toLocaleString("es-CO")}

                </span>

                <div class="business-details">

                    <span>🕒 ${promotion.schedule}</span>

                    <span>👨‍👩‍👧 ${promotion.audience}</span>

                </div>

                <div class="business-actions">

                    <button class="edit-btn" data-id="${promotion.id}">

                     ✏️ Editar

                    </button>

                   <button class="delete-btn"data-id="${promotion.id}">

                    🗑 Eliminar

                    </button>

                </div>

            </div>

        </article>

    `;

}