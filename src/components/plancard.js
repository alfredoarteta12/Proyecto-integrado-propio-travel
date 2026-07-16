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

                    $${Number(promotion.price).toLocaleString("es-CO")}

                </span>

                <div class="business-details">

                    <span>🏢 ${promotion.business_name}</span>

                    <span>🎯 ${promotion.activity_name}</span>

                    <span>🕒 ${promotion.journey_name}</span>

                    <span>👨‍👩‍👧 ${promotion.group_name}</span>

                </div>

                <div class="business-actions">

                    <button
                        class="edit-btn"
                        data-id="${promotion.promotion_id}"
                    >
                        ✏️ Editar
                    </button>

                    <button
                        class="delete-btn"
                        data-id="${promotion.promotion_id}"
                    >
                        🗑 Eliminar
                    </button>

                </div>

            </div>

        </article>

    `;

}