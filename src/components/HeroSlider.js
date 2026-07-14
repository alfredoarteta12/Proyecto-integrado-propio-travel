export function HeroSlider() {

    return `

        <section class="hero-slider">

            <div class="hero-slide active">

                <img src="public/images/hero1.jpg" alt="Gran Malecón">

                <div class="hero-content">

                    <h1>🌴 El Propio Travel</h1>

                    <p>Descubre Barranquilla como un verdadero quillero.</p>

                </div>

            </div>

            <div class="hero-slide">

                <img src="public/images/hero2.jpg" alt="Puerto Mocho">

                <div class="hero-content">

                    <h1>🏖️ Vive el Caribe</h1>

                    <p>Playas, gastronomía y cultura en un solo lugar.</p>

                </div>

            </div>

            <div class="hero-slide">

                <img src="public/images/hero3.jpg" alt="Carnaval">

                <div class="hero-content">

                    <h1>🎭 Siente el Carnaval</h1>

                    <p>La alegría de Barranquilla te espera.</p>

                </div>

            </div>

        </section>

    `;

}
export function initializeHeroSlider(){

    const slides=document.querySelectorAll(".hero-slide");

    let current=0;

    setInterval(()=>{

        slides[current].classList.remove("active");

        current=(current+1)%slides.length;

        slides[current].classList.add("active");

    },5000);

}